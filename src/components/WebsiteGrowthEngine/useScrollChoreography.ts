import { useEffect, RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger, SplitText);

/**
 * Scroll choreography for the Website Growth Engine page.
 *
 * Ported from the standalone flagship design. Three things changed in the
 * move into the SPA, and they are the only intentional departures:
 *
 *  1. Every lookup is scoped to `root` rather than `document`. The page is
 *     one subtree beside the shared Header and Footer, and unscoped
 *     queries would animate those too.
 *  2. Everything is built inside a gsap.context so a route change reverts
 *     the ScrollTriggers, pins and SplitText wrappers. Without it, pinned
 *     sections leave inline transforms on nodes React later reuses.
 *  3. The theme toggle, the #site-header stuck state, the FAQ accordion
 *     and the lead form all lived here in the standalone file. The first
 *     two belong to the shared Header now; the last two are React state.
 *
 * Reduced motion still renders the final readable state — the counters
 * resolve, the bars sit at their real values, and nothing animates.
 */
export function useScrollChoreography(root: RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const q = <T extends Element = Element>(sel: string): T[] =>
      Array.from(el.querySelectorAll<T>(sel));

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(pointer: fine)').matches;

    /* ---------- Lenis smooth scroll ---------- */
    let lenis: Lenis | null = null;
    let tickerFn: ((t: number) => void) | null = null;
    if (!reduced) {
      lenis = new Lenis({ duration: 1.05, smoothWheel: true });
      lenis.on('scroll', ScrollTrigger.update);
      tickerFn = (t: number) => lenis?.raf(t * 1000);
      gsap.ticker.add(tickerFn);
      gsap.ticker.lagSmoothing(0);
    }

    /* ---------- in-page anchors go through Lenis ---------- */
    const anchorCleanups: Array<() => void> = [];
    q<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
      const onClick = (e: MouseEvent) => {
        const id = a.getAttribute('href');
        if (!id || id === '#') return;
        // #lead is the shared ContactForm, which lives outside `.wge`, so
        // fall back to a document lookup when the target is not in scope.
        const target =
          el.querySelector<HTMLElement>(id) ?? document.querySelector<HTMLElement>(id);
        if (!target) return;
        e.preventDefault();
        if (lenis) lenis.scrollTo(target, { offset: -91 });
        else target.scrollIntoView();
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      };
      a.addEventListener('click', onClick);
      anchorCleanups.push(() => a.removeEventListener('click', onClick));
    });

    /* ---------- sticky action bar ----------
       Derived from geometry on every update so it stays correct after
       pins, refreshes and jump links. Stands down over the two CTAs so
       they never compete for the same tap. */
    const actionbar = el.querySelector<HTMLElement>('#actionbar');
    const heroEl = el.querySelector<HTMLElement>('#hero');
    const finalEl = el.querySelector<HTMLElement>('#final');
    // Outside `.wge` — it is the shared ContactForm section.
    const leadSec = document.querySelector<HTMLElement>('#lead');
    const syncBar = () => {
      if (!actionbar) return;
      const vh = window.innerHeight;
      const pastHero = heroEl ? heroEl.getBoundingClientRect().bottom < vh * 0.7 : true;
      const atCta = [finalEl, leadSec].some((n) => {
        if (!n) return false;
        const r = n.getBoundingClientRect();
        return r.top < vh * 0.85 && r.bottom > 0;
      });
      actionbar.setAttribute('data-show', pastHero && !atCta ? 'true' : 'false');
    };

    const ctx = gsap.context(() => {
      if (actionbar) {
        ScrollTrigger.create({ start: 0, end: 'max', onUpdate: syncBar, onRefresh: syncBar });
        window.addEventListener('resize', syncBar);
        syncBar();
      }

      const mm = gsap.matchMedia();
      mm.add(
        {
          motion: '(prefers-reduced-motion: no-preference)',
          desktop: '(min-width: 1024px)',
        },
        (self) => {
          const motion = self.conditions?.motion;
          const desktop = self.conditions?.desktop;

          /* Reduced motion: CSS already holds the final state. Resolve the
             live figures so nothing reads as a placeholder, then stop. */
          if (!motion) {
            q<HTMLElement>('[data-count]').forEach((n) => {
              n.textContent = Number(n.dataset.count).toFixed(Number(n.dataset.decimals || 0));
            });
            q<HTMLElement>('[data-load-time]').forEach((n) => { n.textContent = '0.5'; });
            q('.shotstrip .fr-e').forEach((n) => n.classList.add('on'));
            q<HTMLElement>('[data-taps]').forEach((n) => { n.textContent = '1'; });
            q<HTMLElement>('[data-builtfor]').forEach((n) => { n.textContent = 'Mobile'; });
            q<HTMLElement>('[data-wipe-label]').forEach((n) => {
              n.textContent = 'Typical unoptimized site, then flamehibachi.com';
            });
            q<HTMLElement>('.track-progress b').forEach((n) => { n.style.transform = 'scaleX(1)'; });
            q<HTMLElement>('[data-bar]').forEach((n) => {
              n.style.transform = `scaleX(${Number(n.dataset.bar) / 100})`;
            });
            return;
          }

          /* ---------- split headings ---------- */
          const splits: SplitText[] = [];
          q('[data-split]').forEach((n) => {
            const s = new SplitText(n, { type: 'words,chars', wordsClass: 'word', charsClass: 'char' });
            splits.push(s);
            gsap.set(s.chars, { yPercent: 118 });
          });

          /* ---------- hero intro ----------
             The hidden state is set from JS, never CSS, so the page stays
             readable with JS off or under reduced motion. */
          const hero = el.querySelector<HTMLElement>('#hero');
          if (hero) {
            const heroSplit = hero.querySelector('[data-split]');
            const heroFades = hero.querySelectorAll('[data-fade]');
            gsap.set(heroFades, { opacity: 0, y: 24 });

            const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
            if (heroSplit) {
              tl.to(heroSplit.querySelectorAll('.char'), { yPercent: 0, duration: 1.15, stagger: 0.014 }, 0.1);
            }
            tl.to(heroFades, { opacity: 1, y: 0, duration: 1, stagger: 0.09 }, 0.3)
              .from(el.querySelectorAll('.device .plate'), { opacity: 0, yPercent: 8, rotateY: -14, rotateX: 6, duration: 1.6 }, 0.35)
              .from(el.querySelectorAll('.win'), { yPercent: 14, opacity: 0, duration: 1.2 }, 0.7)
              .from(el.querySelectorAll('.seal'), { opacity: 0, scale: 0.75, duration: 1.1 }, 1.0);

            gsap.to(el.querySelectorAll('.scroll-cue .track i'), {
              scaleX: 0, transformOrigin: 'right', duration: 1.6, repeat: -1,
              ease: 'power2.inOut', yoyo: true, yoyoEase: 'power2.inOut',
            });

            /* hero exit */
            if (heroSplit) {
              gsap.to(heroSplit.querySelectorAll('.char'), {
                yPercent: -60, opacity: 0, stagger: { amount: 0.25 }, ease: 'none',
                scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: 0.6 },
              });
            }
            gsap.to(el.querySelectorAll('.device'), {
              yPercent: -12, scale: 0.94, ease: 'none',
              scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: 0.6 },
            });
          }

          /* ---------- generic reveals ---------- */
          q<HTMLElement>('[data-fade]').forEach((n) => {
            if (hero?.contains(n)) return;
            gsap.from(n, {
              opacity: 0, y: 26, duration: 0.9, ease: 'power3.out',
              delay: parseFloat(n.dataset.delay || '0'),
              scrollTrigger: { trigger: n, start: 'top 88%', once: true },
            });
          });

          /* ---------- non-hero split headings ---------- */
          q('[data-split]').forEach((n) => {
            if (hero?.contains(n)) return;
            gsap.to(n.querySelectorAll('.char'), {
              yPercent: 0, duration: 1.1, ease: 'expo.out', stagger: 0.012,
              scrollTrigger: { trigger: n, start: 'top 85%', once: true },
            });
          });

          /* ---------- marquee, sped up by scroll velocity ---------- */
          const row = el.querySelector('[data-marquee] .row');
          if (row) {
            const loop = gsap.to(row, { xPercent: -50, duration: 26, ease: 'none', repeat: -1 });
            ScrollTrigger.create({
              onUpdate: (st) => {
                const v = gsap.utils.clamp(-2.2, 2.2, st.getVelocity() / 380);
                loop.timeScale(1 + Math.abs(v) * 1.6);
                gsap.to(row, { skewX: v * 2.2, duration: 0.5, ease: 'power2.out', overwrite: 'auto' });
              },
            });
          }

          /* ---------- pinned before / after wipe ---------- */
          const wipe = el.querySelector<HTMLElement>('#wipe');
          if (wipe) {
            const after = wipe.querySelector('[data-after]');
            const line = wipe.querySelector('[data-wipe-line]');
            const timeEl = wipe.querySelector<HTMLElement>('[data-load-time]');
            const tapsEl = wipe.querySelector<HTMLElement>('[data-taps]');
            const builtEl = wipe.querySelector<HTMLElement>('[data-builtfor]');
            const labelEl = wipe.querySelector<HTMLElement>('[data-wipe-label]');
            const capEl = wipe.querySelector<HTMLElement>('[data-wipe-caption]');
            const strip = wipe.querySelector<HTMLElement>('[data-strip]');
            const frames: Element[] = strip ? Array.from(strip.querySelectorAll('.fr')) : [];
            if (strip) strip.classList.add('js');
            const counter = { t: 6.4 }; /* down to the measured 0.5s */

            const wt = gsap.timeline({
              scrollTrigger: {
                trigger: wipe,
                start: 'top top',
                end: '+=180%',
                pin: true,
                scrub: 0.8,
                anticipatePin: 1,
                onUpdate: (st) => {
                  const p = st.progress;
                  if (labelEl) {
                    labelEl.textContent =
                      p < 0.28 ? 'Typical unoptimized site' : p > 0.72 ? 'flamehibachi.com' : 'Rebuilding';
                  }
                  if (strip && frames.length) {
                    const n = frames.length;
                    const fi = Math.min(n - 1, Math.max(0, Math.floor(p * n)));
                    frames.forEach((f, k) => f.classList.toggle('on', k === fi));
                  }
                  if (tapsEl) tapsEl.textContent = p > 0.55 ? '1' : '3';
                  if (builtEl) builtEl.textContent = p > 0.55 ? 'Mobile' : 'Desktop';
                  if (capEl) {
                    capEl.textContent = p > 0.72
                      ? 'flamehibachi.com, a live SEG build across 14 locations. Same traffic, a site that answers the phone.'
                      : 'Everything above is what a visitor meets today. Keep scrolling.';
                  }
                },
              },
            });

            /* All three run the full length so scroll progress maps 1:1
               onto the wipe, the clip and the counter. */
            if (line) wt.to(line, { left: '100%', duration: 1, ease: 'none' }, 0);
            if (after) wt.to(after, { clipPath: 'inset(0 0% 0 0)', duration: 1, ease: 'none' }, 0);
            wt.to(counter, {
              t: 0.5, duration: 1, ease: 'none',
              onUpdate: () => { if (timeEl) timeEl.textContent = counter.t.toFixed(1); },
            }, 0);
            if (line) wt.to(line, { opacity: 0, duration: 0.06 }, 0.95);
          }

          /* ---------- horizontal four-layer track ---------- */
          const track = el.querySelector<HTMLElement>('[data-track]');
          const layers = el.querySelector<HTMLElement>('#layers');
          const bars = q<HTMLElement>('.track-progress b');
          const panels = q<HTMLElement>('.panel');

          if (track && layers && desktop) {
            const distance = () => track.scrollWidth - window.innerWidth + 48;
            gsap.to(track, {
              x: () => -distance(),
              ease: 'none',
              scrollTrigger: {
                trigger: layers,
                start: 'top top',
                end: () => `+=${distance()}`,
                pin: true,
                scrub: 0.9,
                invalidateOnRefresh: true,
                onUpdate: (st) => {
                  const idx = Math.min(panels.length - 1, Math.round(st.progress * (panels.length - 1)));
                  panels.forEach((p, i) => p.classList.toggle('is-active', i === idx));
                  bars.forEach((b, i) => {
                    const local = gsap.utils.clamp(0, 1, st.progress * (panels.length - 1) - i + 1);
                    gsap.set(b, { scaleX: local });
                  });
                },
              },
            });

            panels.forEach((p) => {
              const idxEl = p.querySelector('.idx');
              if (!idxEl) return;
              gsap.from(idxEl, {
                yPercent: 22, ease: 'none',
                scrollTrigger: {
                  trigger: layers, start: 'top top', end: () => `+=${distance()}`, scrub: 1,
                },
              });
            });
          } else if (track) {
            /* Below the pin breakpoint the track is a swipe rail. CSS owns
               the snap and the edge fade; this only keeps the progress
               dashes honest as a position indicator. */
            const scroller = el.querySelector<HTMLElement>('[data-track-scroller]');
            if (scroller) {
              const syncRail = () => {
                const max = scroller.scrollWidth - scroller.clientWidth;
                const p = max > 0 ? scroller.scrollLeft / max : 0;
                const idx = Math.min(panels.length - 1, Math.round(p * (panels.length - 1)));
                panels.forEach((n, i) => n.classList.toggle('is-active', i === idx));
                bars.forEach((b, i) => {
                  gsap.set(b, { scaleX: gsap.utils.clamp(0, 1, p * (panels.length - 1) - i + 1) });
                });
              };
              scroller.addEventListener('scroll', syncRail, { passive: true });
              syncRail();
            }
          }

          /* ---------- sticky value stack ---------- */
          const cards = q<HTMLElement>('[data-stack-card]');
          cards.forEach((card, i) => {
            if (i === cards.length - 1) return;
            gsap.to(card, {
              scale: 0.94, opacity: 0.45, ease: 'none',
              scrollTrigger: { trigger: cards[i + 1], start: 'top 85%', end: 'top 30%', scrub: 0.6 },
            });
          });

          /* ---------- counters ----------
             The real figure lives in the markup so the page is truthful
             with JS off and to crawlers. It is zeroed only once motion is
             confirmed, so the count-up never visibly snaps backwards. */
          q<HTMLElement>('[data-count]').forEach((n) => {
            n.textContent = (0).toFixed(Number(n.dataset.decimals || 0));
          });
          q<HTMLElement>('[data-count]').forEach((n) => {
            const target = Number(n.dataset.count);
            const dp = Number(n.dataset.decimals || 0);
            const obj = { v: 0 };
            gsap.to(obj, {
              v: target, duration: 1.8, ease: 'power2.out',
              onUpdate: () => { n.textContent = obj.v.toFixed(dp); },
              scrollTrigger: { trigger: n, start: 'top 88%', once: true },
            });
          });

          /* ---------- final CTA word, decorative ---------- */
          const grow = el.querySelector('#final [data-grow]');
          const finalSec = el.querySelector('#final');
          if (grow && finalSec) {
            gsap.to(grow, {
              scale: 1.18, yPercent: -6, ease: 'none',
              scrollTrigger: { trigger: finalSec, start: 'top bottom', end: 'bottom top', scrub: 1 },
            });
          }

          /* ---------- scroll progress rail ---------- */
          const rail = el.querySelector('#rail span');
          if (rail) {
            gsap.to(rail, {
              scaleY: 1, ease: 'none',
              scrollTrigger: { trigger: el, start: 'top top', end: 'bottom bottom', scrub: 0.3 },
            });
          }

          /* ---------- atmosphere ----------
             The fixed layer behind the page re-tints as each chapter
             arrives, and the three blobs drift at different rates. */
          const atmos = el.querySelector<HTMLElement>('#atmos');
          if (atmos) {
            q<HTMLElement>('[data-bg]').forEach((sec) => {
              ScrollTrigger.create({
                trigger: sec,
                start: 'top 62%',
                end: 'bottom 38%',
                onToggle: (st) => {
                  if (!st.isActive) return;
                  q('[data-bg].is-current').forEach((n) => n.classList.remove('is-current'));
                  sec.classList.add('is-current');
                  gsap.to(atmos, {
                    backgroundColor: sec.dataset.bg,
                    duration: 1.1, ease: 'power2.out', overwrite: 'auto',
                  });
                },
              });
            });

            const drift: Array<[string, gsap.TweenVars, number]> = [
              ['.b1', { yPercent: -34, xPercent: 16, scale: 1.25 }, 1.4],
              ['.b2', { yPercent: 40, xPercent: -22, scale: 1.4 }, 1.9],
              ['.b3', { yPercent: -58, xPercent: -12, scale: 1.15 }, 1.1],
            ];
            drift.forEach(([sel, vars, scrub]) => {
              const blob = atmos.querySelector(sel);
              if (!blob) return;
              gsap.to(blob, {
                ...vars, ease: 'none',
                scrollTrigger: { trigger: el, start: 'top top', end: 'bottom bottom', scrub },
              });
            });
          }

          /* ---------- repair: the light chapter breathes ---------- */
          const repair = el.querySelector<HTMLElement>('#repair');
          if (repair) {
            gsap.fromTo(
              repair,
              { '--repair-shift': '0%' },
              {
                '--repair-shift': '60%', ease: 'none',
                scrollTrigger: { trigger: repair, start: 'top bottom', end: 'bottom top', scrub: 1 },
              }
            );
            const grid = el.querySelector('.repair-grid');
            if (grid) {
              gsap.from(el.querySelectorAll('.rcard'), {
                y: 34, opacity: 0, duration: 1, ease: 'power3.out', stagger: 0.09,
                scrollTrigger: { trigger: grid, start: 'top 82%', once: true },
              });
            }
          }

          /* ---------- showcase bars grow to their real value ---------- */
          q<HTMLElement>('[data-bar]').forEach((n) => {
            gsap.to(n, {
              scaleX: Number(n.dataset.bar) / 100,
              duration: 1.25, ease: 'power3.out',
              scrollTrigger: { trigger: n, start: 'top 92%', once: true },
            });
          });

          /* ---------- cursor glow + magnetic buttons ---------- */
          if (finePointer) {
            const glow = el.querySelector<HTMLElement>('#glow');
            if (glow) {
              const gx = gsap.quickTo(glow, 'x', { duration: 0.75, ease: 'power3' });
              const gy = gsap.quickTo(glow, 'y', { duration: 0.75, ease: 'power3' });
              const onMove = (e: PointerEvent) => {
                gsap.to(glow, { opacity: 1, duration: 0.4, overwrite: 'auto' });
                gx(e.clientX);
                gy(e.clientY);
              };
              window.addEventListener('pointermove', onMove, { passive: true });
              anchorCleanups.push(() => window.removeEventListener('pointermove', onMove));
            }

            q<HTMLElement>('[data-magnetic]').forEach((n) => {
              const xTo = gsap.quickTo(n, 'x', { duration: 0.5, ease: 'elastic.out(1,0.4)' });
              const yTo = gsap.quickTo(n, 'y', { duration: 0.5, ease: 'elastic.out(1,0.4)' });
              const move = (e: PointerEvent) => {
                const r = n.getBoundingClientRect();
                xTo((e.clientX - (r.left + r.width / 2)) * 0.32);
                yTo((e.clientY - (r.top + r.height / 2)) * 0.5);
              };
              const leave = () => { xTo(0); yTo(0); };
              n.addEventListener('pointermove', move);
              n.addEventListener('pointerleave', leave);
              anchorCleanups.push(() => {
                n.removeEventListener('pointermove', move);
                n.removeEventListener('pointerleave', leave);
              });
            });
          }

          return () => splits.forEach((s) => s.revert());
        }
      );
    }, el);

    /* recalc once webfonts have settled and after full load */
    const refresh = () => ScrollTrigger.refresh();
    if (document.fonts?.ready) document.fonts.ready.then(refresh);
    window.addEventListener('load', refresh);

    return () => {
      window.removeEventListener('load', refresh);
      window.removeEventListener('resize', syncBar);
      anchorCleanups.forEach((fn) => fn());
      ctx.revert();
      if (tickerFn) gsap.ticker.remove(tickerFn);
      lenis?.destroy();
    };
  }, [root]);
}
