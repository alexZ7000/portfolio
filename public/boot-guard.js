(function () {
    'use strict';

    var errors = [];

    function rememberError(event) {
        try {
            var text = '';
            if (event) {
                if (event.message) text = event.message;
                else if (event.error && event.error.message) text = event.error.message;
                else if (event.reason && event.reason.message) text = event.reason.message;
                else if (event.reason) text = String(event.reason);
            }
            if (text && errors.length < 5) errors.push(String(text));
        } catch (ignored) {
            void 0;
        }
    }

    if (window.addEventListener) {
        window.addEventListener('error', rememberError);
        window.addEventListener('unhandledrejection', rememberError);
    }

    function appBooted() {
        try {
            return document.documentElement.getAttribute('data-app-booted') === '1';
        } catch (ignored) {
            return true;
        }
    }

    var shown = false;

    function escapeHtml(text) {
        return String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    function showBanner() {
        if (shown || appBooted()) return;
        shown = true;
        try {
            var banner = document.createElement('div');
            banner.id = 'boot-guard-banner';
            banner.setAttribute('role', 'alert');
            banner.style.cssText =
                'position:fixed;left:0;right:0;bottom:0;z-index:2147483647;' +
                'background:#101418;color:#f5f6f8;' +
                'font:14px/1.5 Arial,Helvetica,sans-serif;' +
                'padding:14px 48px 14px 16px;border-top:2px solid #00f2a1;' +
                'box-shadow:0 -8px 24px rgba(0,0,0,.45);text-align:left;';

            var pt =
                '<strong>A parte interativa deste site não carregou.</strong> ' +
                'Seu navegador parece estar desatualizado — atualize o ' +
                'Chrome, Edge ou Firefox e recarregue a página.';
            var en =
                'The interactive part of this site failed to load — ' +
                'your browser looks outdated. Please update it and reload.';

            var detail = '';
            try {
                var parts = [];
                if (errors.length) parts.push(errors[0]);
                if (navigator && navigator.userAgent) parts.push(navigator.userAgent);
                if (parts.length) {
                    detail =
                        '<div style="margin-top:8px;font:11px/1.4 Consolas,monospace;' +
                        'color:#8a929c;word-break:break-all;">' +
                        escapeHtml(parts.join(' — ')) +
                        '</div>';
                }
            } catch (ignored) {
                detail = '';
            }

            banner.innerHTML =
                '<div style="max-width:60rem;margin:0 auto;">' +
                '<div>' +
                pt +
                '</div>' +
                '<div style="margin-top:4px;color:#a1a9b4;font-size:12px;">' +
                en +
                '</div>' +
                detail +
                '</div>';

            var close = document.createElement('button');
            close.type = 'button';
            close.setAttribute('aria-label', 'Fechar aviso');
            close.innerHTML = '×';
            close.style.cssText =
                'position:absolute;top:8px;right:12px;background:none;border:none;' +
                'color:#a1a9b4;font-size:22px;line-height:1;cursor:pointer;padding:4px;';
            close.onclick = function () {
                if (banner.parentNode) banner.parentNode.removeChild(banner);
            };
            banner.appendChild(close);

            document.body.appendChild(banner);
        } catch (ignored) {
            void 0;
        }
    }

    function armTimer() {
        setTimeout(showBanner, 7000);
    }

    if (document.readyState === 'complete') {
        armTimer();
    } else if (window.addEventListener) {
        window.addEventListener('load', armTimer);
        setTimeout(showBanner, 30000);
    }
})();
