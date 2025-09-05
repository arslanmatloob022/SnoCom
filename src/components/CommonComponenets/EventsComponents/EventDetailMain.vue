<script>
import EventImageComponent from "./EventImageComponent.vue";
import EventQRScan from "./EventQRScan.vue";
</script>
<template>
  <div class="EventDetails_wrapper">
    <EventImageComponent />

    <div class="ContentSection_wrapper">
      <div class="MainInfo_header___Ascn">
        <div class="MainInfo_inAppRegistration">
          <span data-test-id="" class="Icon_iconWrapper MainInfo_icon"
            ><svg
              width="13"
              height="12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="Icon_icon"
            >
              <g clip-path="url(#snoonu_svg__a)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.128 10.667c2.552 0 4.079-1.392 4.079-3.146 0-2.713-4.489-2.442-4.489-3.363 0-.307.336-.614 1.006-.614 1.08 0 2.16.597 2.625 1.085l1.378-1.718C10.74 2.025 9.231 1.5 7.722 1.5H.727l.014.082C1.05 2.996 1.957 3.87 3.558 4.286c-.392.084-.81.28-1.107.495.552.935 2.178 1.72 3.997 2.224.99.308 1.89.5 1.89 1.004 0 .343-.372.633-.95.633-1.267 0-2.645-.778-3.204-1.357l-1.51 1.79c1.099 1.03 2.795 1.592 4.452 1.592h.002Z"
                  fill="currentColor"
                ></path>
              </g>
              <defs>
                <clipPath id="snoonu_svg__a">
                  <path
                    fill="currentColor"
                    transform="translate(.227)"
                    d="M0 0h12v12H0z"
                  ></path>
                </clipPath>
              </defs></svg
          ></span>
          <p class="Typography_p10">Register</p>
        </div>
        <div class="MainInfo_tags">
          <p class="Typography_p8">0 event sessions • Things to Do</p>
        </div>
      </div>
      <h3 class="Typography_h3 MainInfo_title">
        Fällä – Self-Driven Solar-Powered Boat
      </h3>
      <p
        class="Typography_p7 MainInfo_description__P_fQQ MainInfo_minified__0Yb_R"
      >
        Enjoy a 1-hour eco-friendly ride from West Bay Beach aboard Fällä, a
        self-driven, solar-powered electric boat. Designed for comfort and
        safety, it fits up to 6 people and offers a quiet, smooth, and
        sustainable journey—perfect for families and friends seeking a unique
        water adventure.
      </p>
      <div class="MainInfo_showMore">
        <p class="Typography_p6">Show more</p>
        <span data-test-id="" class="Icon_iconWrapper MainInfo_chevronIcon"
          ><svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="Icon_icon"
          >
            <path
              d="m12 13.232-6-6L4.232 9 12 16.768 19.768 9 18 7.232l-6 6Z"
              fill="currentColor"
            ></path></svg
        ></span>
      </div>
      <div class="SessionList_wrapper">
        <div class="Carousel_wrapper">
          <div class="Carousel_navButtonWrapper__gL_66"></div>
          <div class="Carousel_carousel SessionList_carousel"></div>
          <div class="Carousel_navButtonWrapper__gL_66"></div>
        </div>
        <div class="SessionList_sessions"></div>
      </div>
      <div class="EventRoute_wrapper">
        <div class="EventRoute_header">
          <h3 class="Typography_h3">Route</h3>
          <a
            rel="noopener noreferrer"
            data-analytic-label="eventRouteLinkFromButton"
            target="_blank"
            href="https://www.google.com/maps/search/west+bay+beach/@25.3295414,51.5289111,1574m/data=!3m1!1e3?entry=ttu&amp;g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D"
            ><button
              class="Button_button Button_secondary Button_small EventRoute_routeButton___NBMB"
              data-analytic-label="eventRoute"
            >
              <span class="Button_content">Google Maps</span>
            </button></a
          >
        </div>
        <div class="EventRoute_imageWrapper__cS_Lz">
          <a
            rel="noopener noreferrer"
            data-analytic-label="eventRouteLinkFromImage"
            target="_blank"
            href="https://www.google.com/maps/search/west+bay+beach/@25.3295414,51.5289111,1574m/data=!3m1!1e3?entry=ttu&amp;g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D"
            ><img
              alt="router image for Fällä – Self-Driven Solar-Powered Boat"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              src="https://images.snoonu.com/snoofun/2025-07/ea4004d9-9ab8-49b7-b688-7568c9760a19_Screenshot20250713160103.png"
              style="
                position: absolute;
                height: 100%;
                width: 100%;
                inset: 0px;
                object-fit: cover;
                color: transparent;
              "
          /></a>
        </div>
      </div>
      <div class="EventFAQ_wrapper">
        <h3 class="Typography_h3">Questions &amp; Answers</h3>
        <div class="EventFAQ_list">
          <div>
            <div class="AccordionFAQ_header">
              <p class="Typography_p4">Refund Policy</p>
              <span
                data-test-id=""
                class="Icon_iconWrapper AccordionFAQ_arrowIcon"
                ><svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="Icon_icon"
                >
                  <path
                    d="m12 13.232-6-6L4.232 9 12 16.768 19.768 9 18 7.232l-6 6Z"
                    fill="currentColor"
                  ></path></svg
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <EventQRScan />
  </div>
</template>
<style scoped>
.Typography_p1,
.Typography_p2,
.Typography_p3__dH_h7 {
  font-size: 20px;
  line-height: 24px;
}
.Accordion_module_enter__k_tBy {
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transition: opacity 0.3s ease, max-height 0.3s ease;
}
.Accordion_module_enterActive {
  opacity: 1;
  max-height: 500px;
}
.Accordion_module_exit {
  opacity: 1;
  max-height: 500px;
  transition: opacity 0.3s ease, max-height 0.3s ease;
}
.Accordion_module_exitActive {
  opacity: 0;
  max-height: 0;
}
.Accordion_module_content {
  text-align: initial;
}
.AccordionFAQ_header {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: row;
  padding-top: 24px;
  padding-bottom: 24px;
}
.AccordionFAQ_header.AccordionFAQ_open {
  padding-bottom: 16px;
}
@media (max-width: 575px) {
  .AccordionFAQ_header.AccordionFAQ_open {
    padding-bottom: 14px;
  }
}
.AccordionFAQ_answer {
  padding-bottom: 24px;
}
.AccordionFAQ_arrowIcon {
  width: 24px;
  height: 24px;
  transition: transform 0.3s ease;
}
.AccordionFAQ_reverseIcon {
  transform: rotate(180deg);
}
:root[lang="ar"] .AccordionFAQ_header {
  text-align: right;
}
.EventFAQ_wrapper {
  margin-top: 40px;
}
.EventFAQ_list > div {
  border-bottom: 1px solid var(--border-and-divider-secondary);
}
.EventFAQ_list > div:last-of-type {
  border-bottom: none;
}
.EventRoute_wrapper {
  margin-top: 40px;
}
.EventRoute_header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: row;
}
.EventRoute_header .EventRoute_routeButton___NBMB {
  padding: 10px 20px;
}
.EventRoute_imageWrapper__cS_Lz {
  position: relative;
  width: 100%;
  height: 200px;
  margin-top: 24px;
  border-radius: 20px;
  overflow: hidden;
}
@media (max-width: 575px) {
  .EventRoute_imageWrapper__cS_Lz {
    height: 160px;
  }
}
.MainInfo_header___Ascn {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
  gap: 12px;
}
.MainInfo_header___Ascn .MainInfo_inAppRegistration {
  padding: 8px 12px;
  border-radius: 16px;
  background-color: var(--constant-brand);
  color: var(--text-invert-primary);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
  gap: 4px;
}
.MainInfo_header___Ascn .MainInfo_inAppRegistration .MainInfo_icon {
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
}
.MainInfo_header___Ascn .MainInfo_tags {
  color: var(--text-secondary);
}
.MainInfo_description__P_fQQ,
.MainInfo_title {
  margin-top: 16px;
}
.MainInfo_minified__0Yb_R {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
@supports (-webkit-line-clamp: 3) {
  .MainInfo_minified__0Yb_R {
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
}
.MainInfo_showMore {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
  color: var(--text-secondary);
  cursor: pointer;
  margin-top: 4px;
}
.MainInfo_showMore .MainInfo_chevronIcon {
  width: 16px;
  height: 16px;
}
.MainInfo_showMore .MainInfo_chevronIcon.MainInfo_reverseChevronIcon {
  transform: rotate(180deg);
}
:root[lang="ar"] .MainInfo_description__P_fQQ,
:root[lang="ar"] .MainInfo_tags {
  text-align: right;
}
.CardSession_wrapper {
  width: 100%;
  padding: 20px 20px 20px 24px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  border-radius: 32px;
  box-shadow: var(--box-shadow-56);
}
@media (max-width: 1360px) {
  .CardSession_wrapper {
    grid-template-columns: auto 1fr;
    padding: 16px;
  }
}
.CardSession_date,
.CardSession_mainInfo {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-flow: column;
  gap: 6px;
}
.CardSession_mainInfo {
  -webkit-margin-start: 24px;
  margin-inline-start: 24px;
  -webkit-margin-end: 16px;
  margin-inline-end: 16px;
}
@media (max-width: 1360px) {
  .CardSession_mainInfo {
    -webkit-margin-start: 16px;
    margin-inline-start: 16px;
    -webkit-margin-end: 0;
    margin-inline-end: 0;
  }
}
.CardSession_location {
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
  align-items: flex-start;
  gap: 4px;
}
.CardSession_location .CardSession_locationIcon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}
@media (max-width: 1360px) {
  .CardSession_buySection___s16b {
    grid-column-end: span 2;
    margin-top: 16px;
  }
}
.CardSession_buySection___s16b .CardSession_disabled {
  pointer-events: none;
  color: var(--text-secondary);
  width: 100%;
}
.CardSession_buySection___s16b .CardSession_externalTicketsButton {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
}
@media (max-width: 1360px) {
  .CardSession_buySection___s16b .CardSession_externalTicketsButton {
    width: 100%;
    justify-content: center;
  }
}
.CardSession_buySection___s16b .CardSession_buyButtonWrapper {
  position: relative;
}
.CardSession_buySection___s16b
  .CardSession_buyButtonWrapper
  .CardSession_tooltip {
  position: absolute;
  top: -16px;
  inset-inline-start: calc(100% - 28px);
  padding: 2px 8px;
  background: var(--background-inverted);
  color: var(--text-invert-primary);
  border-radius: 8px;
  text-align: initial;
  width: max-content;
  display: none;
}
.CardSession_buySection___s16b
  .CardSession_buyButtonWrapper:hover
  .CardSession_tooltip {
  display: block;
}
@media (max-width: 1024px) {
  .CardSession_buySection___s16b
    .CardSession_buyButtonWrapper:hover
    .CardSession_tooltip {
    display: none;
  }
}
.CardSession_buySection___s16b .CardSession_buyButton {
  position: relative;
  width: 100%;
  min-width: 148px;
  min-height: 48px;
  justify-content: center;
  column-gap: 8px;
  row-gap: 0;
  padding: 6px 20px;
}
@media (max-width: 1024px) {
  .CardSession_buySection___s16b .CardSession_buyButton {
    min-height: 44px;
  }
}
.CardSession_buySection___s16b .CardSession_buyButton span {
  flex-wrap: wrap;
  row-gap: 0;
}
.CardSession_buySection___s16b
  .CardSession_buyButton
  span
  .CardSession_buyButtonSubtitle {
  flex-basis: 100%;
  color: var(--text-secondary);
  width: 30px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.CardSession_buySection___s16b
  .CardSession_buyButton
  span
  .CardSession_freeOptions,
.CardSession_buySection___s16b
  .CardSession_buyButton
  span
  .CardSession_free__Evb_o {
  color: var(--text-snoofun-free);
  font-weight: 600;
}
.CardSession_buySection___s16b .CardSession_buyButton .CardSession_badge {
  position: absolute;
  top: -6px;
  inset-inline-end: -4px;
  color: var(--constant-white);
  padding: 1px 5px;
  border-radius: 10px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.12);
}
.CardSession_buySection___s16b
  .CardSession_buyButton
  .CardSession_badge.CardSession_freeBadge {
  background: var(--background-snoofun-free-badge);
}
.CardSession_buySection___s16b
  .CardSession_buyButton
  .CardSession_badge.CardSession_soonBadge {
  background: var(--background-snoofun-soon-badge);
}
.CardSession_buySection___s16b
  .CardSession_buyButton
  .CardSession_badge.CardSession_closedBadge,
.CardSession_buySection___s16b
  .CardSession_buyButton
  .CardSession_badge.CardSession_soldOutBadge {
  background-color: var(--background-tertiary);
  color: var(--text-secondary);
}
:root[lang="ar"] .CardSession_arrowIcon {
  transform: scaleX(-1);
}
.SessionList_wrapper {
  margin-top: 32px;
}
.SessionList_wrapper .SessionList_carousel {
  gap: 0;
  align-items: flex-end;
  overflow: hidden;
}
.SessionList_monthLabel {
  text-align: initial;
  color: var(--text-secondary);
  margin-bottom: 0;
}
.SessionList_date {
  width: 64px;
  height: 64px;
  border-radius: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  border: 1px solid var(--border-and-divider-secondary);
  cursor: pointer;
  margin: 12px 6px;
}
.SessionList_date.SessionList_selected {
  border: 3px solid var(--border-and-divider-secondary);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}
.SessionList_sessions {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-flow: column;
  gap: 24px;
  margin-top: 24px;
}
.Carousel_wrapper {
  position: relative;
}
@media (max-width: 1360px) {
  .Carousel_wrapper {
    margin-right: var(--content-wrapper-side-padding-negative);
    margin-left: var(--content-wrapper-side-padding-negative);
  }
  .Carousel_wrapper .Carousel_navButtonWrapper__gL_66 {
    display: none;
  }
}
.Carousel_carousel {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
  scrollbar-width: none;
  gap: 24px;
}
.Carousel_carousel::-webkit-scrollbar {
  display: none;
}
.Carousel_enter__Jz_dI {
  opacity: 0;
  transition: opacity 0.2s ease;
}
.Carousel_enterActive__o_jK8 {
  opacity: 1;
}
.Carousel_exit {
  opacity: 1;
  transition: opacity 0.2s ease;
}
.Carousel_exitActive {
  opacity: 0;
}
@media (max-width: 1360px) {
  :root[lang="en"] .Carousel_carousel > :first-of-type {
    padding-left: var(--content-wrapper-side-padding);
  }
  :root[lang="ar"] .Carousel_carousel > :first-of-type,
  :root[lang="en"] .Carousel_carousel > :last-of-type {
    padding-right: var(--content-wrapper-side-padding);
  }
  :root[lang="ar"] .Carousel_carousel > :last-of-type {
    padding-left: var(--content-wrapper-side-padding);
  }
}
.NavButton_wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row;
  border-radius: 24px;
  width: 48px;
  height: 48px;
  background: var(--control-tertiary);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 2;
  box-shadow: var(--box-shadow-56);
}
.NavButton_wrapper.NavButton_prev {
  left: -32px;
}
.NavButton_wrapper.NavButton_next__x_uZ2 {
  right: -32px;
}
.SkeletonEventDate_monthLabel {
  width: 40px;
  height: 20px;
  margin-bottom: 12px;
}
.SkeletonEventDate_date__5aM_y {
  width: 64px;
  height: 64px;
}
.SkeletonEventSessions_wrapper {
  width: 100%;
  padding: 20px 20px 20px 24px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  border-radius: 32px;
  box-shadow: var(--box-shadow-56);
}
@media (max-width: 1360px) {
  .SkeletonEventSessions_wrapper {
    grid-template-columns: auto 1fr;
    padding: 16px;
  }
}
.SkeletonEventSessions_date,
.SkeletonEventSessions_mainInfo {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-flow: column;
  gap: 6px;
}
.SkeletonEventSessions_day,
.SkeletonEventSessions_hour,
.SkeletonEventSessions_location__AG_pv,
.SkeletonEventSessions_title {
  height: 20px;
}
@media (max-width: 575px) {
  .SkeletonEventSessions_day,
  .SkeletonEventSessions_hour,
  .SkeletonEventSessions_location__AG_pv,
  .SkeletonEventSessions_title {
    height: 16px;
  }
}
.SkeletonEventSessions_day {
  width: 42px;
}
.SkeletonEventSessions_hour {
  width: 62px;
}
.SkeletonEventSessions_mainInfo {
  width: 100%;
  -webkit-margin-start: 24px;
  margin-inline-start: 24px;
}
.SkeletonEventSessions_title {
  width: 40%;
}
.SkeletonEventSessions_location__AG_pv {
  width: 30%;
}
.SkeletonEventSessions_buySection {
  width: 120px;
  height: 48px;
}
@media (max-width: 1360px) {
  .SkeletonEventSessions_buySection {
    grid-column-end: span 2;
    margin-top: 16px;
    width: 100%;
  }
}
@media (max-width: 575px) {
  .SkeletonEventSessions_buySection {
    height: 44px;
  }
}
.ContentSection_wrapper {
  width: 100%;
  min-width: 0;
  -webkit-margin-start: 32px;
  margin-inline-start: 32px;
  -webkit-margin-end: auto;
  margin-inline-end: auto;
}
@media (max-width: 1024px) {
  .ContentSection_wrapper {
    -webkit-margin-start: 0;
    margin-inline-start: 0;
    margin-top: 32px;
  }
}
@media (max-width: 575px) {
  .ContentSection_wrapper {
    margin-top: 24px;
  }
}
.ImageSection_imageWrapper {
  position: relative;
  width: 315px;
  height: 420px;
  border-radius: 32px;
  overflow: hidden;
  flex-shrink: 0;
}
@media (max-width: 1360px) {
  .ImageSection_imageWrapper {
    width: 225px;
    height: 300px;
  }
}
@media (max-width: 1024px) {
  .ImageSection_imageWrapper {
    width: 400px;
    height: 400px;
  }
}
@media (max-width: 575px) {
  .ImageSection_imageWrapper {
    width: calc(100% + 2 * var(--content-wrapper-side-padding));
    height: 336px;
    margin-left: var(--content-wrapper-side-padding-negative);
    margin-right: var(--content-wrapper-side-padding-negative);
    border-radius: 0;
  }
}
.ImageSection_imageWrapper .ImageSection_image {
  object-fit: cover;
}
.QRSection_wrapper {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: column;
  width: 320px;
  -webkit-margin-start: 37px;
  margin-inline-start: 37px;
  padding: 20px;
  border-radius: 32px;
  gap: 16px;
  box-shadow: var(--box-shadow-m);
  text-align: center;
}
@media (max-width: 1360px) {
  .QRSection_wrapper {
    width: 250px;
  }
}
@media (max-width: 1024px) {
  .QRSection_wrapper {
    display: none;
  }
}
.QRSection_logoWrapper {
  position: relative;
  width: 83px;
  height: 32px;
}
.QRSection_qrContent {
  width: 100%;
  background: var(--background-inverted);
  padding: 24px 16px 20px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: column;
  gap: 16px;
  color: var(--text-invert-primary);
}
.QRSection_qrContent .QRSection_qr {
  position: relative;
  width: 140px;
  height: 140px;
  border-radius: 8px;
  padding: 8px;
  background-color: var(--text-invert-primary);
}
.QRSection_qrContent .QRSection_qrCode {
  width: 100%;
  height: 100%;
}
.QRSection_footer {
  display: none;
}
.EventDetails_wrapper {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-flow: row;
  margin-top: 24px;
  padding: 60px;
}
@media (max-width: 1024px) {
  .EventDetails_wrapper {
    flex-direction: column;
    align-items: center;
    margin-top: 12px;
  }
}
.CardProductImage_imageWrapper {
  position: relative;
  flex-shrink: 0;
  width: 172px;
  height: 172px;
  border-radius: 28px;
  background: var(--constant-white);
  overflow: hidden;
}
@media (max-width: 1024px) {
  .CardProductImage_imageWrapper {
    width: 140px;
    height: 140px;
  }
}
@media (max-width: 575px) {
  .CardProductImage_imageWrapper {
    width: 134px;
    height: 134px;
  }
}
.CardProductImage_imageWrapper.CardProductImage_fromCart {
  width: 84px;
  height: 84px;
  filter: brightness(0.96);
  border-radius: 20px;
}
.CardProductImage_discount {
  position: absolute;
  top: 12px;
  inset-inline-end: 12px;
  color: var(--constant-white);
  padding: 2px 6px;
  background: var(--constant-brand);
  box-shadow: var(--box-shadow-badge-light);
  border-radius: 12px 12px 0 12px;
}
.CardProductImage_productLeft {
  position: absolute;
  bottom: 12px;
  inset-inline-start: 12px;
  padding: 2px 6px;
  border-radius: 100px;
  background: var(--background-toast);
  color: var(--constant-white);
}
.CardProductImage_fromCart .CardProductImage_discount {
  inset-inline-end: 8px;
  top: 8px;
}
.CardProductImage_fromCart .CardProductImage_productLeft {
  bottom: 8px;
  inset-inline-start: 8px;
}
.SpecialRequest_modal .SpecialRequest_form {
  width: 100%;
  margin-top: 16px;
}
.SpecialRequest_modal .SpecialRequest_addRequest {
  margin-top: 24px;
}
@media (max-width: 575px) {
  .SpecialRequest_modal .SpecialRequest_addRequest {
    margin-top: 12px;
  }
}
:root[lang="ar"] .SpecialRequest_title {
  text-align: center;
}
.MarketplaceCardProduct_wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
}
.MarketplaceCardProduct_goingToRemove {
  opacity: 0.5;
}
.MarketplaceCardProduct_additional {
  color: var(--text-secondary);
}
.MarketplaceCardProduct_notes {
  text-align: initial;
  color: var(--text-secondary);
  margin: 4px 0;
}
.MarketplaceCardProduct_specialRequest {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  width: 150px;
  margin: 4px 0 10px;
  color: var(--text-secondary);
  cursor: pointer;
  border: 1px solid var(--border-and-divider-secondary);
  border-radius: 8px;
}
.MarketplaceCardProduct_productButton___Mk_G {
  width: 126px;
  height: 52px;
  margin: 0 !important;
}
.MarketplaceCardProduct_productButton___Mk_G.MarketplaceCardProduct_fromSingleClickCheckout {
  grid-area: counter;
}
@media (max-width: 575px) {
  .MarketplaceCardProduct_productButton___Mk_G {
    -webkit-margin-start: auto !important;
    margin-inline-start: auto !important;
  }
}
.MarketplaceCardProduct_price {
  -webkit-margin-start: auto;
  margin-inline-start: auto;
  margin-top: 14px;
}
.MarketplaceCardProduct_price.MarketplaceCardProduct_fromSingleClickCheckout {
  grid-area: price;
}
@media (max-width: 575px) {
  .MarketplaceCardProduct_price.MarketplaceCardProduct_fromSingleClickCheckout {
    -webkit-margin-start: 0;
    margin-inline-start: 0;
  }
}
:root[lang="ar"] .MarketplaceCardProduct_additional,
:root[lang="ar"] .MarketplaceCardProduct_name,
:root[lang="ar"] .MarketplaceCardProduct_notes {
  text-align: initial;
}
.MarketplaceCardProduct_image.MarketplaceCardProduct_fromSingleClickCheckout {
  grid-area: image;
}
.MarketplaceCardProduct_label.MarketplaceCardProduct_fromSingleClickCheckout {
  grid-area: label;
}
.Popup_popup {
  position: absolute;
  overflow: auto;
  border-radius: 24px;
  background: var(--background-primary);
  box-shadow: var(--box-shadow-68);
  transition: all 0.3s linear;
}
.Popup_popupEnterDone {
  opacity: 1;
}
.Popup_overlay {
  position: fixed;
  top: -1px;
  bottom: -1px;
  left: -1px;
  right: -1px;
  background: rgba(0, 0, 0, 0.8);
  z-index: 13;
}
.AddressPopup_popup {
  top: calc(100% + 8px);
  width: 342px;
  max-height: 332px;
  z-index: 12;
  border-radius: 32px;
  display: flex;
  align-items: stretch;
  justify-content: stretch;
  flex-flow: column;
}
@media (max-width: 1360px) {
  .AddressPopup_popup {
    inset-inline-start: unset;
  }
}
@media (max-width: 575px) {
  .AddressPopup_popup {
    position: fixed;
    top: auto;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    max-height: 572px;
    box-shadow: var(--box-shadow-56);
    border-radius: 24px 24px 0 0;
  }
}
.AddressPopup_popup .AddressPopup_title__WT_pB {
  display: none;
}
@media (max-width: 575px) {
  .AddressPopup_popup .AddressPopup_title__WT_pB {
    display: block;
    padding: 20px 16px 8px;
  }
}
.AddressPopup_popup .AddressPopup_list {
  padding-top: 12px;
  padding-bottom: 9px;
  -webkit-padding-start: 12px;
  padding-inline-start: 12px;
  -webkit-padding-end: 12px;
  padding-inline-end: 12px;
}
@media (max-width: 575px) {
  .AddressPopup_popup .AddressPopup_list {
    order: 2;
    padding-left: 12px;
    padding-right: 12px;
  }
}
.AddressPopup_popup .AddressPopup_withCartButton {
  padding-bottom: 88px;
}
.AddressPopup_addAddress {
  z-index: 2;
  background: var(--background-primary);
  box-shadow: var(--box-shadow-56);
  position: -webkit-sticky;
  position: sticky;
  bottom: 0;
  cursor: pointer;
  padding: 16px 20px 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
  gap: 4px;
  color: var(--control-primary);
}
@media (max-width: 575px) {
  .AddressPopup_addAddress {
    padding: 16px 16px 8px;
    box-shadow: none;
  }
}
.AddressLoading_loading {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
}
.AddressLoading_loading .AddressLoading_content {
  width: 100%;
  -webkit-margin-start: 40px;
  margin-inline-start: 40px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-flow: column;
}
.AddressLoading_loading .AddressLoading_content .AddressLoading_label {
  width: 30%;
  height: 20px;
}
.AddressLoading_loading .AddressLoading_content .AddressLoading_notes {
  width: 40%;
  height: 16px;
  margin-top: 2px;
}
.DeliveryAddress_wrapper {
  background: var(--background-secondary);
  padding: 16px 20px;
  border-radius: 20px;
}
@media (max-width: 1024px) {
  .DeliveryAddress_wrapper {
    padding: 16px;
  }
}
.DeliveryAddress_addressWrapper {
  position: relative;
}
.DeliveryAddress_popup {
  top: 0 !important;
  width: 100% !important;
  max-height: 356px !important;
}
@media (max-width: 575px) {
  .DeliveryAddress_popup {
    top: unset !important;
    max-height: 572px !important;
  }
}
.DeliveryAddress_fromCheckoutDrawer {
  margin-top: 12px;
}
.DeliveryAddress_fromCheckoutDrawer .DeliveryAddress_title {
  margin-bottom: 12px;
}
.PaymentList_title {
  margin-top: 24px;
  margin-bottom: 16px;
  width: 100%;
  text-align: initial;
}
.PaymentList_form {
  width: 100%;
}
.PaymentList_addNewCardButton {
  margin-top: 12px;
  margin-bottom: 12px;
}
.CreditCardRadio_method {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
}
.CreditCardRadio_label {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-flow: column;
  flex: 1 1;
  padding-top: 16px;
  padding-bottom: 16px;
  -webkit-padding-end: 16px;
  padding-inline-end: 16px;
}
.CreditCardRadio_info {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
  gap: 16px;
}
.CreditCardRadio_needsVerification {
  margin-top: 4px;
  padding: 4px 8px;
  color: var(--text-brand);
  background: var(--background-error);
  border-radius: 14px;
}
.CreditCardRadio_radio {
  -webkit-margin-start: auto;
  margin-inline-start: auto;
}
.PaymentRadio_label,
.PaymentRadio_method {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
}
.PaymentRadio_label {
  gap: 16px;
  flex: 1 1;
  padding-top: 16px;
  padding-bottom: 16px;
  -webkit-padding-end: 16px;
  padding-inline-end: 16px;
}
.PaymentRadio_info {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-flow: column;
}
.PaymentRadio_desc__nVS__ {
  color: var(--text-secondary);
  margin-top: 2px;
}
.PaymentRadio_radio {
  -webkit-margin-start: auto;
  margin-inline-start: auto;
}
.NotAvailablePayment_method__9u__E {
  opacity: 0.5;
}
.NotAvailablePayment_label,
.NotAvailablePayment_method__9u__E {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
}
.NotAvailablePayment_label {
  gap: 16px;
  flex: 1 1;
  padding-top: 16px;
  padding-bottom: 16px;
  -webkit-padding-end: 16px;
  padding-inline-end: 16px;
}
@media (max-width: 575px) {
  .PaymentRadioList_list {
    --drawer-top: 124px;
    --restModalHeight: 380px;
    max-height: calc(100vh - var(--drawer-top) - var(--restModalHeight));
    overflow: auto;
    scroll-behavior: smooth;
    scrollbar-width: none;
  }
  .PaymentRadioList_list::-webkit-scrollbar {
    display: none;
  }
}
.PaymentRadioList_list > div {
  border-bottom: 1px solid var(--border-and-divider-primary);
}
.PaymentRadioList_list > div:last-of-type {
  border-bottom: none;
}
.ChangePhoneNumber_modalContent {
  width: 392px;
  padding: 24px;
}
.PhoneForm_title {
  margin-top: 16px;
  margin-bottom: 12px;
}
.PhoneForm_info {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
  gap: 8px;
  margin-top: 20px;
  margin-bottom: 32px;
  padding: 10px;
  border-radius: 12px;
  color: var(--text-warning);
  background: var(--background-warning);
}
.PhoneForm_form {
  width: 100%;
}
.PhoneForm_icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}
.PhoneForm_infoLabel__4_bo6 {
  text-align: start;
}
.PhoneForm_continueBtn {
  margin-top: 24px;
}
.PinForm_title__r_2BX {
  margin: 16px 20px 24px;
}
.PinForm_form {
  width: 100%;
  text-align: start;
}
.PinForm_centeredText__sTE_a input {
  text-align: center;
  letter-spacing: 22px;
  text-indent: 22px;
}
.PinForm_centeredText__sTE_a input:focus,
.PinForm_centeredText__sTE_a input:focus-visible,
.PinForm_centeredText__sTE_a input:hover {
  outline: none;
}
.PinForm_centeredText__sTE_a div {
  display: none;
}
.PinForm_centeredText__sTE_a p {
  text-align: center !important;
  -webkit-padding-start: unset !important;
  padding-inline-start: unset !important;
}
.PinForm_filled__ylWT_ input {
  color: var(--text-success);
}
.PinForm_invalid input {
  color: var(--text-error);
}
.PinForm_button__YlK_9 {
  margin-top: 24px;
}
:root[lang="ar"] .PinForm_title__r_2BX {
  text-align: center;
}
.UnlockPaymentMethods_wrapper {
  background: var(--background-attention);
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 16px;
}
.UnlockPaymentMethods_wrapper .UnlockPaymentMethods_button {
  margin-top: 16px;
  box-shadow: var(--box-shadow-top-54);
  border: none;
}
.PaymentMethodModal_modalContent {
  width: 408px;
}
.PaymentMethods_paymentMethod {
  background-color: var(--background-secondary);
  padding: 16px 20px;
  cursor: pointer;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
  margin-top: 16px;
  margin-bottom: 24px;
}
@media (max-width: 575px) {
  .PaymentMethods_paymentMethod {
    margin-top: 12px;
    margin-bottom: 20px;
  }
}
.PaymentMethods_label {
  -webkit-margin-end: auto;
  margin-inline-end: auto;
}
.PaymentMethods_icon {
  width: 32px;
  height: 32px;
  -webkit-margin-end: 16px;
  margin-inline-end: 16px;
}
.PaymentMethods_loading {
  width: 100%;
  height: 56px;
  margin-top: 16px;
  margin-bottom: 24px;
}
:root[lang="ar"] .PaymentMethods_rightIcon__Y_bPY {
  transform: scaleX(-1);
}
.LoaderFullscreen_wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 9999999;
  background: var(--background-toast);
}
svg.LoaderFullscreen_spinner {
  width: 40px;
  height: 40px;
  x: 0;
  y: 0;
  viewbox: 0 0 40 40;
}
svg.LoaderFullscreen_spinner circle {
  fill: rgba(0, 0, 0, 0);
  stroke: var(--background-primary);
  stroke-width: 4;
  stroke-linecap: round;
  stroke-dasharray: 125.6;
  transform-origin: 20px 20px 0;
  animation: LoaderFullscreen_spinner 2s linear infinite;
}
@keyframes LoaderFullscreen_spinner {
  0% {
    transform: rotate(0deg);
    stroke-dashoffset: 26.4;
  }
  50% {
    transform: rotate(2turn);
    stroke-dashoffset: 125.6;
  }
  to {
    transform: rotate(3turn);
    stroke-dashoffset: 26.4;
  }
}
.MarketplaceCardPayment_wrapper {
  --sticky-cart-width: 392px;
  width: var(--sticky-cart-width);
  background: var(--background-primary);
  border-radius: 32px;
  max-height: calc(100vh - 160px);
  overflow: auto;
}
@media (max-width: 1024px) {
  .MarketplaceCardPayment_wrapper {
    max-height: unset;
    width: auto;
    overflow: unset;
  }
}
@media (max-width: 575px) {
  .MarketplaceCardPayment_wrapper.MarketplaceCardPayment_fromSingleClickCheckout
    .MarketplaceCardPayment_stickyBottomContent,
  .MarketplaceCardPayment_wrapper.MarketplaceCardPayment_fromSingleClickCheckout
    .MarketplaceCardPayment_topContent {
    padding: 0;
  }
}
.MarketplaceCardPayment_topContent {
  padding: 24px 24px 0;
}
@media (max-width: 1024px) {
  .MarketplaceCardPayment_topContent {
    padding: 32px 32px 0;
  }
}
@media (max-width: 575px) {
  .MarketplaceCardPayment_topContent {
    padding: 16px 16px 0;
  }
}
.MarketplaceCardPayment_stickyBottomContent {
  position: -webkit-sticky;
  position: sticky;
  bottom: 0;
  background: var(--background-primary);
  padding: 4px 24px 24px;
  z-index: 13;
}
@media (max-width: 1024px) {
  .MarketplaceCardPayment_stickyBottomContent {
    padding: 4px 32px 32px;
  }
}
@media (max-width: 575px) {
  .MarketplaceCardPayment_stickyBottomContent {
    padding: 4px 16px 16px;
  }
}
.MarketplaceCardPayment_stickyBottomContent.MarketplaceCardPayment_withShadowTop {
  box-shadow: var(--box-shadow-top-10);
}
.MarketplaceCardPayment_stickyBottomContent.MarketplaceCardPayment_fromSingleClickCheckout {
  position: relative;
  border-radius: 0 0 32px 32px;
}
.MarketplaceCardPayment_placeOrder {
  margin-top: 24px;
}
@media (max-width: 1024px) {
  .MarketplaceCardPayment_placeOrder.MarketplaceCardPayment_fromSingleClickCheckout {
    display: none;
  }
}
.OrderInfo_wrapper {
  margin-top: 24px;
}
@media (max-width: 575px) {
  .OrderInfo_wrapper {
    margin-top: 20px;
  }
}
.OrderInfo_wrapper .OrderInfo_total {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: row;
  margin-bottom: 24px;
}
.OrderInfo_wrapper .OrderInfo_total .OrderInfo_loading {
  width: 92px;
  height: 32px;
}
.OrderInfo_wrapper .OrderInfo_prices {
  display: flex;
  align-items: baseline;
  justify-content: normal;
  flex-flow: row;
  gap: 4px;
}
.OrderInfo_wrapper .OrderInfo_prices .OrderInfo_oldPrice {
  color: var(--text-secondary);
}
.OrderSubCartInfo_cart {
  margin-top: 24px;
}
.OrderSubCartInfo_cart .OrderSubCartInfo_item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: row;
  margin-top: 8px;
}
.OrderSubCartInfo_cart .OrderSubCartInfo_item .OrderSubCartInfo_price {
  flex-shrink: 0;
}
.OrderSubCartInfo_merchantName {
  text-align: initial;
}
.PriceInfo_total__fL_R_ {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: row;
  margin-bottom: 24px;
}
.PriceInfo_total__fL_R_ .PriceInfo_loading {
  width: 92px;
  height: 32px;
}
.PriceInfo_total__fL_R_.PriceInfo_fromSingleClickCheckout {
  margin-bottom: 0;
}
.PriceInfo_prices {
  display: flex;
  align-items: baseline;
  justify-content: normal;
  flex-flow: row;
  gap: 4px;
}
.PriceInfo_prices .PriceInfo_oldPrice {
  color: var(--text-secondary);
}
.AddVoucherModal_modalContent__09pj_ {
  padding: 32px;
  width: 408px;
  text-align: initial;
}
@media (max-width: 575px) {
  .AddVoucherModal_modalContent__09pj_ {
    padding: 32px 20px 20px;
    border-radius: 32px;
  }
}
.AddVoucherModal_title {
  margin: 0;
  width: 100%;
}
.AddVoucherModal_form__8Yq8_ {
  width: 100%;
  margin-top: 16px;
}
.AddVoucherModal_input {
  direction: ltr;
}
.AddVoucherModal_info {
  margin-top: 8px;
  margin-bottom: 4px;
  padding: 8px 16px;
  border-radius: 16px;
  background: #eaf4ff;
  color: #687b94;
}
.AddVoucherModal_button {
  margin-top: 12px;
}
.VoucherInfo_wrapper {
  margin-top: 12px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: row;
}
.VoucherInfo_badge {
  cursor: pointer;
  border-radius: 16px;
  padding: 4px 8px;
}
.VoucherInfo_add {
  background: var(--background-secondary);
}
.VoucherInfo_applied__38_qB {
  background: var(--background-success);
  color: var(--text-success);
}
.VoucherInfoModal_modalContent {
  padding: 32px;
  width: 408px;
}
@media (max-width: 575px) {
  .VoucherInfoModal_modalContent {
    padding: 32px 20px 20px;
    border-radius: 32px;
  }
}
.VoucherInfoModal_title {
  margin-top: 16px;
}
.VoucherInfoModal_voucher {
  border-radius: 16px;
  background: var(--background-success);
  color: var(--text-success);
  margin-top: 16px;
  margin-bottom: 16px;
  padding: 4px 8px;
}
.Switch_wrapper__C_D66 {
  display: inline-flex;
}
.Switch_input {
  opacity: 0;
  height: 0;
  width: 0;
}
.Switch_track {
  cursor: pointer;
  overflow: hidden;
  position: relative;
  border-radius: 35px;
  background-color: var(--border-and-divider-secondary);
  height: 40px;
  min-width: 62px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
  transition: background-color 0.15s ease;
}
input:checked + .Switch_track {
  background-color: var(--control-primary);
  border-color: red;
  transition: background-color 0.15s ease;
}
input:focus-visible + .Switch_track {
  outline-offset: 2px;
  outline: 2px solid var(--control-primary);
}
@media (max-width: 575px) {
  .Switch_track {
    height: 32px;
    min-width: 52px;
  }
}
.Switch_thumb {
  position: absolute;
  border-radius: 50%;
  background-color: var(--control-tertiary);
  height: 32px;
  width: 32px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.09);
  inset-inline-start: 4px;
  transition: inset-inline-start 0.15s ease;
}
input:checked + * > .Switch_thumb {
  background: var(--background-primary);
  inset-inline-start: calc(100% - 32px - 4px);
}
@media (max-width: 575px) {
  input:checked + * > .Switch_thumb {
    inset-inline-start: calc(100% - 24px - 4px);
  }
  .Switch_thumb {
    height: 24px;
    width: 24px;
  }
}
.WalletSwitcher_wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
  text-align: initial;
  margin-top: 16px;
}
@media (max-width: 575px) {
  .WalletSwitcher_wrapper {
    margin-top: 12px;
  }
}
.WalletSwitcher_switch {
  -webkit-margin-start: auto;
  margin-inline-start: auto;
}
.WalletSwitcher_info {
  margin-top: 12px;
  padding: 8px 16px;
  border-radius: 16px;
  text-align: initial;
  background: #eaf4ff;
  color: #687b94;
}
.ContentWrapper_container {
  width: 100%;
  max-width: 1710px;
  margin: 0 auto;
  padding: 0 var(--content-wrapper-side-padding);
}
@media (max-width: 1360px) {
  .ContentWrapper_container {
    max-width: unset;
  }
}
.BackToTop_container__UP_jh {
  background-color: var(--background-on-color);
  cursor: pointer;
}
.BackToTop_container__UP_jh > p {
  text-align: center;
  padding: 16px;
}
.Footer_wrapper {
  background-color: var(--background-secondary);
  margin-top: 48px;
}
@media (max-width: 767px) {
  .Footer_wrapper {
    margin-top: 40px;
  }
}
@media (max-width: 355px) {
  .Footer_wrapper {
    margin-top: 32px;
  }
}
.Footer_container__W_Eon {
  margin: 0 auto;
  padding: 24px var(--content-wrapper-side-padding);
  max-width: 1710px;
}
.Footer_divider {
  width: 100%;
  height: 1px;
  background-color: var(--background-tertiary);
}
.Footer_moreServices {
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
}
@media (max-width: 767px) {
  .Footer_moreServices.Footer_moreServices {
    align-items: center;
  }
  .Footer_moreServices.Footer_moreServices p {
    display: none;
  }
}
.Footer_servicesContainer {
  display: flex;
  gap: 24px;
}
.Footer_appStores {
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
}
@media (max-width: 575px) {
  .Footer_appStores {
    flex-wrap: wrap;
    justify-content: center;
  }
}
.Footer_appStores .Footer_imageWrapper {
  width: 141px;
  height: 44px;
  position: relative;
}
.Footer_services {
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  gap: 24px;
}
@media (max-width: 1360px) {
  .Footer_services.Footer_services :nth-child(n + 4) {
    display: none;
  }
}
@media (max-width: 1024px) {
  .Footer_services.Footer_services :nth-child(n + 3) {
    display: none;
  }
}
@media (max-width: 767px) {
  .Footer_services.Footer_services {
    display: none;
  }
}
.Footer_services .Footer_serviceItem {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
  gap: 8px;
}
.Footer_services .Footer_serviceItem .Footer_imageWrapper {
  width: 44px;
  height: 44px;
  position: relative;
}
.Footer_services .Footer_serviceItem .Footer_content {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-flow: column;
  gap: 4px;
}
.Footer_services .Footer_serviceItem .Footer_content p:last-child {
  color: var(--text-secondary);
}
.Footer_bottomHalfContainer {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
  margin-top: 24px;
}
@media (max-width: 767px) {
  .Footer_bottomHalfContainer {
    flex-direction: column;
    gap: 24px;
  }
}
.Footer_bottomHalfContainer .Footer_legalLinks {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
  gap: 32px;
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  padding: 14px 0;
}
.Footer_bottomHalfContainer .Footer_legalLinks a {
  color: var(--text-secondary);
}
@media (max-width: 1360px) {
  .Footer_bottomHalfContainer .Footer_legalLinks {
    flex-grow: 1;
  }
}
@media (max-width: 767px) {
  .Footer_bottomHalfContainer .Footer_legalLinks {
    order: 1;
    padding: 0;
  }
}
@media (max-width: 575px) {
  .Footer_bottomHalfContainer .Footer_legalLinks {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    column-gap: 0;
    row-gap: 16px;
  }
  .Footer_bottomHalfContainer .Footer_legalLinks > * {
    width: 130px;
    text-align: center;
  }
  .Footer_bottomHalfContainer .Footer_legalLinks .Footer_copyright {
    order: 1;
  }
}
.Footer_bottomHalfContainer .Footer_copyright {
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
}
.Footer_bottomHalfContainer .Footer_socialLinks {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
  gap: 16px;
  position: relative;
  -webkit-margin-start: auto;
  margin-inline-start: auto;
}
@media (max-width: 575px) {
  .Footer_bottomHalfContainer .Footer_socialLinks {
    flex-wrap: wrap;
  }
}
@media (max-width: 767px) {
  .Footer_bottomHalfContainer .Footer_socialLinks {
    -webkit-margin-start: initial;
    margin-inline-start: 0;
    justify-content: center;
    align-items: center;
  }
}
.Footer_bottomHalfContainer .Footer_socialLinks .Footer_link__J_xuo {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row;
  border-radius: 10px;
  background: #fff;
}
.NoRidersUnderSun_container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #ffeee6;
  color: var(--text-primary);
  border-radius: 24px;
  padding: 16px;
  gap: 16px;
  cursor: pointer;
}
.NoRidersUnderSun_text___zrjf {
  text-align: start;
}
:root[lang="ar"] .NoRidersUnderSun_hotImage {
  transform: scaleX(-1);
}
.NoRidersUnderSun_skeleton {
  width: 100%;
  min-height: 72px;
  height: 100%;
}
@media (max-width: 1024px) {
  .NoRidersUnderSun_skeleton {
    min-height: 80px;
  }
}
.FooterLinks_grid {
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 24px 48px;
  gap: 24px 48px;
  justify-content: space-between;
}
@media (max-width: 767px) {
  .FooterLinks_grid {
    grid-template-columns: repeat(4, auto);
    grid-template-rows: repeat(1, 1fr);
  }
}
@media (max-width: 575px) {
  .FooterLinks_grid {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 24px 24px;
  }
}
.FooterLinks_grid a {
  color: var(--text-secondary);
}
.FooterLinks_grid > div {
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: start;
}
@media (max-width: 767px) {
  .FooterLinks_grid
    > div:not(
      .FooterLinks_helpSection,
      .FooterLinks_snoonuMarket,
      .FooterLinks_allServices,
      .FooterLinks_others___J_Gn
    ) {
    display: none;
  }
}
.FooterLinks_others___J_Gn,
.FooterLinks_snoonuMarket {
  display: none !important;
}
@media (max-width: 767px) {
  .FooterLinks_others___J_Gn,
  .FooterLinks_snoonuMarket {
    display: flex !important;
  }
}
.FooterLinks_others___J_Gn > p:first-child {
  height: 14px;
}
</style>
