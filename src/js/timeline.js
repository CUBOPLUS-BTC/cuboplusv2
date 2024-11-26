const setCards = (cards) => {
    if (!Array.isArray(cards)) {
        console.error("Expected an array but got:", cards);
        return;
    }

    let html = "";

    cards.forEach((m, index) => {
        html += 
            `<div class="js-timeline_item ag-timeline_item">
                <div class="ag-timeline-card_box">
                    <div class="ag-timeline-card_meta-box">
                        <div class="ag-timeline-card_meta">${m.title}</div>
                    </div>
                    <div class="js-timeline-card_point-box ag-timeline-card_point-box">
                        <div class="ag-timeline-card_point">${index + 1}</div>
                    </div>
                </div>
                <div class="ag-timeline-card_item">
                    <div class="ag-timeline-card_inner">
                        <div class="ag-timeline-card_img-box">
                            <img src="${m.img}" class="ag-timeline-card_img" />
                        </div>
                    </div>
                    <div class="ag-timeline-card_arrow"></div>
                </div>
            </div>`;
    });

   // document.getElementById("mentions").innerHTML = html;
    fnUpdateFrame(); // Llama a la función de actualización después de añadir el contenido
};

const setElements = async (content) => {
    setCards(content.cards);
};

document.addEventListener("DOMContentLoaded", (e) => {
    changeLanguage("timeline", localStorage.getItem("language") || "en", (content) => {
        setElements(content);
    });
});

esButton[0].addEventListener("click", (e) => {
    changeLanguage("timeline", "es", (content) => {
        setElements(content);
    });
});

esButton[1].addEventListener("click", (e) => {
    changeLanguage("timeline", "es", (content) => {
        setElements(content);
    });
});

enButton[0].addEventListener("click", (e) => {
    changeLanguage("timeline", "en", (content) => {
        setElements(content);
    });
});

enButton[1].addEventListener("click", (e) => {
    changeLanguage("timeline", "en", (content) => {
        setElements(content);
    });
});

(function ($) {
    $(function () {
  
        $(window).on('scroll', function () {
            fnOnScroll();
        });
  
        $(window).on('resize', function () {
            fnOnResize();
        });
  
        var agTimeline = $('.js-timeline'),
            agTimelineLine = $('.js-timeline_line'),
            agTimelineLineProgress = $('.js-timeline_line-progress'),
            agTimelinePoint = $('.js-timeline-card_point-box'),
            agTimelineItem = $('.js-timeline_item'),
            agOuterHeight = $(window).outerHeight(),
            agHeight = $(window).height(),
            f = -1,
            agFlag = false;
  
        function fnOnScroll() {
            agPosY = $(window).scrollTop();
            fnUpdateFrame();
        }
  
        function fnOnResize() {
            agPosY = $(window).scrollTop();
            agHeight = $(window).height();
            fnUpdateFrame();
        }
  
        function fnUpdateWindow() {
            agFlag = false;
            agTimelineLine.css({
                top: agTimelineItem.first().find(agTimelinePoint).offset().top - agTimelineItem.first().offset().top,
                bottom: agTimeline.offset().top + agTimeline.outerHeight() - agTimelineItem.last().find(agTimelinePoint).offset().top
            });
            f !== agPosY && (f = agPosY, agHeight, fnUpdateProgress());
        }
  
        function fnUpdateProgress() {
            var agTop = agTimelineItem.last().find(agTimelinePoint).offset().top;
            i = agTop + agPosY - $(window).scrollTop();
            a = agTimelineLineProgress.offset().top + agPosY - $(window).scrollTop();
            n = agPosY - a + agOuterHeight / 2;
            i <= agPosY + agOuterHeight / 2 && (n = i - a);
            agTimelineLineProgress.css({ height: n + "px" });

            agTimelineItem.each(function () {
                var agTop = $(this).find(agTimelinePoint).offset().top;
                (agTop + agPosY - $(window).scrollTop()) < agPosY + .5 * agOuterHeight ? $(this).addClass('js-ag-active') : $(this).removeClass('js-ag-active');
            });
        }
  
        function fnUpdateFrame() {
            agFlag || requestAnimationFrame(fnUpdateWindow);
            agFlag = true;
        }

        // Inicializar el marco al cargar la página
        fnUpdateFrame();
    });
})(jQuery);
