document.addEventListener('DOMContentLoaded', () => {
    const revealTargets = document.querySelectorAll('[data-reveal]');

    const revealObserver = new IntersectionObserver((entries) => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                revealObserver.unobserve(entry.target);
            }
        }
    }, {
        threshold: 0.16,
        rootMargin: '0px 0px -8% 0px'
    });

    revealTargets.forEach((target) => revealObserver.observe(target));

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.style.scrollBehavior = 'auto';
        document.querySelectorAll('*').forEach((element) => {
            element.style.animation = 'none';
            element.style.transitionDuration = '0s';
        });
    }

    const lightbox = document.getElementById('project-lightbox');
    const lightboxImage = lightbox?.querySelector('.lightbox-image');
    const lightboxCaption = lightbox?.querySelector('.lightbox-caption');
    const lightboxClose = lightbox?.querySelector('.lightbox-close');
    const galleryTriggers = document.querySelectorAll('.gallery-trigger');

    const closeLightbox = () => {
        if (!lightbox || !lightboxImage || !lightboxCaption) {
            return;
        }
        lightbox.classList.remove('is-open');
        lightbox.setAttribute('aria-hidden', 'true');
        lightboxImage.setAttribute('src', '');
        lightboxImage.setAttribute('alt', '');
        lightboxCaption.textContent = '';
        document.body.style.overflow = '';
    };

    if (lightbox && lightboxImage && lightboxCaption && galleryTriggers.length > 0) {
        galleryTriggers.forEach((trigger) => {
            trigger.addEventListener('click', () => {
                const image = trigger.querySelector('.gallery-image');
                if (!image) {
                    return;
                }

                const caption = trigger.getAttribute('data-caption') || image.getAttribute('alt') || '';
                lightboxImage.setAttribute('src', image.getAttribute('src') || '');
                lightboxImage.setAttribute('alt', image.getAttribute('alt') || 'Expanded gallery image');
                lightboxCaption.textContent = caption;
                lightbox.classList.add('is-open');
                lightbox.setAttribute('aria-hidden', 'false');
                document.body.style.overflow = 'hidden';
            });
        });

        lightboxClose?.addEventListener('click', closeLightbox);

        lightbox.addEventListener('click', (event) => {
            if (event.target === lightbox) {
                closeLightbox();
            }
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && lightbox.classList.contains('is-open')) {
                closeLightbox();
            }
        });
    }
});
