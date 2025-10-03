<script></script>
<template>
  <div class="DateSelector_wrapper">
    <div class="DateRangePicker_dateWrapper">
      <div class="DateRangePicker_chip__uKn_1 DateRangePicker_withIcon">
        <span
          data-test-id=""
          class="Icon_iconWrapper"
          style="width: 20px; height: 20px"
          ><svg
            width="21"
            height="20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="Icon_icon"
          >
            <g clip-path="url(#calendar_svg__a)" fill="currentColor">
              <path
                d="M10.227 7.5a.952.952 0 1 0 0 1.905.952.952 0 0 0 0-1.905ZM5.941 13.214a.952.952 0 1 0 0 1.905.952.952 0 0 0 0-1.905ZM10.227 13.214a.952.952 0 1 0 0 1.905.952.952 0 0 0 0-1.905ZM13.56 14.166a.952.952 0 1 1 1.905 0 .952.952 0 0 1-1.905 0ZM4.989 8.452a.952.952 0 1 1 1.905 0 .952.952 0 0 1-1.905 0ZM14.513 7.5a.952.952 0 1 0 0 1.905.952.952 0 0 0 0-1.905ZM13.56 11.31a.952.952 0 1 1 1.905 0 .952.952 0 0 1-1.905 0ZM5.941 10.357a.952.952 0 1 0 0 1.905.952.952 0 0 0 0-1.905ZM9.275 11.31a.952.952 0 1 1 1.904 0 .952.952 0 0 1-1.904 0Z"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M.227 3.69A2.857 2.857 0 0 1 3.084.833H17.37a2.857 2.857 0 0 1 2.857 2.857v12.381a2.857 2.857 0 0 1-2.857 2.857H3.084a2.857 2.857 0 0 1-2.857-2.857V3.691Zm1.905 2.857c0-.526.426-.952.952-.952H17.37c.526 0 .952.426.952.952v9.524a.952.952 0 0 1-.952.953H3.084a.952.952 0 0 1-.952-.953V6.547Z"
              ></path>
            </g>
            <defs>
              <clipPath id="calendar_svg__a">
                <path
                  fill="#fff"
                  transform="translate(.227)"
                  d="M0 0h20v20H0z"
                ></path>
              </clipPath>
            </defs></svg
        ></span>
        <p class="Typography_p5">Date</p>
      </div>
    </div>
    <!-- <div class="Popup_popupEnterDone">
      <div class="Popup_popup DateRangePicker_popup__wB_ti">
        <div
          class="rdp-root DateRangePicker_root"
          data-mode="range"
          data-multiple-months="true"
        >
          <div class="rdp-months DateRangePicker_months">
            <nav class="rdp-nav DateRangePicker_nav___XrVv" aria-label="">
              <button
                type="button"
                class="rdp-button_previous DateRangePicker_monthButton"
                aria-label="Go to the Previous Month"
              >
                <svg
                  class="rdp-chevron DateRangePicker_chevron__0_luT"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <polygon
                    points="16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20"
                  ></polygon>
                </svg></button
              ><button
                type="button"
                class="rdp-button_next DateRangePicker_monthButton"
                aria-label="Go to the Next Month"
              >
                <svg
                  class="rdp-chevron DateRangePicker_chevron__0_luT"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <polygon
                    points="8 18.612 14.1888889 12.5 8 6.37733333 9.91111111 4.5 18 12.5 9.91111111 20.5"
                  ></polygon>
                </svg>
              </button>
            </nav>
            <div class="rdp-month DateRangePicker_month">
              <div class="rdp-month_caption DateRangePicker_monthCaption">
                <span class="rdp-caption_label" role="status" aria-live="polite"
                  >September 2025</span
                >
              </div>
              <table
                role="grid"
                aria-multiselectable="true"
                aria-label="September 2025"
                class="rdp-month_grid DateRangePicker_monthGrid"
              >
                <thead aria-hidden="true">
                  <tr class="rdp-weekdays">
                    <th aria-label="Sunday" class="rdp-weekday" scope="col">
                      Su
                    </th>
                    <th aria-label="Monday" class="rdp-weekday" scope="col">
                      Mo
                    </th>
                    <th aria-label="Tuesday" class="rdp-weekday" scope="col">
                      Tu
                    </th>
                    <th aria-label="Wednesday" class="rdp-weekday" scope="col">
                      We
                    </th>
                    <th aria-label="Thursday" class="rdp-weekday" scope="col">
                      Th
                    </th>
                    <th aria-label="Friday" class="rdp-weekday" scope="col">
                      Fr
                    </th>
                    <th aria-label="Saturday" class="rdp-weekday" scope="col">
                      Sa
                    </th>
                  </tr>
                </thead>
                <tbody class="rdp-weeks">
                  <tr class="rdp-week">
                    <td
                      class="rdp-day DateRangePicker_day rdp-disabled rdp-hidden rdp-outside"
                      role="gridcell"
                      data-day="2025-08-31"
                      data-month="2025-08"
                      data-disabled="true"
                      data-hidden="true"
                      data-outside="true"
                    ></td>
                    <td
                      class="rdp-day DateRangePicker_day rdp-disabled"
                      role="gridcell"
                      data-day="2025-09-01"
                      data-disabled="true"
                    >
                      <button
                        class="rdp-day_button DateRangePicker_dayButton"
                        type="button"
                        disabled=""
                        tabindex="-1"
                        aria-label="Monday, September 1st, 2025"
                      >
                        1
                      </button>
                    </td>
                    <td
                      class="rdp-day DateRangePicker_day rdp-disabled"
                      role="gridcell"
                      data-day="2025-09-02"
                      data-disabled="true"
                    >
                      <button
                        class="rdp-day_button DateRangePicker_dayButton"
                        type="button"
                        disabled=""
                        tabindex="-1"
                        aria-label="Tuesday, September 2nd, 2025"
                      >
                        2
                      </button>
                    </td>
                    <td
                      class="rdp-day DateRangePicker_day rdp-disabled"
                      role="gridcell"
                      data-day="2025-09-03"
                      data-disabled="true"
                    >
                      <button
                        class="rdp-day_button DateRangePicker_dayButton"
                        type="button"
                        disabled=""
                        tabindex="-1"
                        aria-label="Wednesday, September 3rd, 2025"
                      >
                        3
                      </button>
                    </td>
                    <td
                      class="rdp-day DateRangePicker_day rdp-today DateRangePicker_today"
                      role="gridcell"
                      data-day="2025-09-04"
                      data-today="true"
                    >
                      <button
                        class="rdp-day_button DateRangePicker_dayButton"
                        type="button"
                        tabindex="0"
                        aria-label="Today, Thursday, September 4th, 2025"
                      >
                        4
                      </button>
                    </td>
                    <td
                      class="rdp-day DateRangePicker_day"
                      role="gridcell"
                      data-day="2025-09-05"
                    >
                      <button
                        class="rdp-day_button DateRangePicker_dayButton"
                        type="button"
                        tabindex="-1"
                        aria-label="Friday, September 5th, 2025"
                      >
                        5
                      </button>
                    </td>
                    <td
                      class="rdp-day DateRangePicker_day"
                      role="gridcell"
                      data-day="2025-09-06"
                    >
                      <button
                        class="rdp-day_button DateRangePicker_dayButton"
                        type="button"
                        tabindex="-1"
                        aria-label="Saturday, September 6th, 2025"
                      >
                        6
                      </button>
                    </td>
                  </tr>
                  <tr class="rdp-week">
                    <td
                      class="rdp-day DateRangePicker_day"
                      role="gridcell"
                      data-day="2025-09-07"
                    >
                      <button
                        class="rdp-day_button DateRangePicker_dayButton"
                        type="button"
                        tabindex="-1"
                        aria-label="Sunday, September 7th, 2025"
                      >
                        7
                      </button>
                    </td>
                    <td
                      class="rdp-day DateRangePicker_day"
                      role="gridcell"
                      data-day="2025-09-08"
                    >
                      <button
                        class="rdp-day_button DateRangePicker_dayButton"
                        type="button"
                        tabindex="-1"
                        aria-label="Monday, September 8th, 2025"
                      >
                        8
                      </button>
                    </td>
                    <td
                      class="rdp-day DateRangePicker_day"
                      role="gridcell"
                      data-day="2025-09-09"
                    >
                      <button
                        class="rdp-day_button DateRangePicker_dayButton"
                        type="button"
                        tabindex="-1"
                        aria-label="Tuesday, September 9th, 2025"
                      >
                        9
                      </button>
                    </td>
                    <td
                      class="rdp-day DateRangePicker_day"
                      role="gridcell"
                      data-day="2025-09-10"
                    >
                      <button
                        class="rdp-day_button DateRangePicker_dayButton"
                        type="button"
                        tabindex="-1"
                        aria-label="Wednesday, September 10th, 2025"
                      >
                        10
                      </button>
                    </td>
                    <td
                      class="rdp-day DateRangePicker_day"
                      role="gridcell"
                      data-day="2025-09-11"
                    >
                      <button
                        class="rdp-day_button DateRangePicker_dayButton"
                        type="button"
                        tabindex="-1"
                        aria-label="Thursday, September 11th, 2025"
                      >
                        11
                      </button>
                    </td>
                    <td
                      class="rdp-day DateRangePicker_day"
                      role="gridcell"
                      data-day="2025-09-12"
                    >
                      <button
                        class="rdp-day_button DateRangePicker_dayButton"
                        type="button"
                        tabindex="-1"
                        aria-label="Friday, September 12th, 2025"
                      >
                        12
                      </button>
                    </td>
                    <td
                      class="rdp-day DateRangePicker_day"
                      role="gridcell"
                      data-day="2025-09-13"
                    >
                      <button
                        class="rdp-day_button DateRangePicker_dayButton"
                        type="button"
                        tabindex="-1"
                        aria-label="Saturday, September 13th, 2025"
                      >
                        13
                      </button>
                    </td>
                  </tr>
                  <tr class="rdp-week">
                    <td
                      class="rdp-day DateRangePicker_day"
                      role="gridcell"
                      data-day="2025-09-14"
                    >
                      <button
                        class="rdp-day_button DateRangePicker_dayButton"
                        type="button"
                        tabindex="-1"
                        aria-label="Sunday, September 14th, 2025"
                      >
                        14
                      </button>
                    </td>
                    <td
                      class="rdp-day DateRangePicker_day"
                      role="gridcell"
                      data-day="2025-09-15"
                    >
                      <button
                        class="rdp-day_button DateRangePicker_dayButton"
                        type="button"
                        tabindex="-1"
                        aria-label="Monday, September 15th, 2025"
                      >
                        15
                      </button>
                    </td>
                    <td
                      class="rdp-day DateRangePicker_day"
                      role="gridcell"
                      data-day="2025-09-16"
                    >
                      <button
                        class="rdp-day_button DateRangePicker_dayButton"
                        type="button"
                        tabindex="-1"
                        aria-label="Tuesday, September 16th, 2025"
                      >
                        16
                      </button>
                    </td>
                    <td
                      class="rdp-day DateRangePicker_day"
                      role="gridcell"
                      data-day="2025-09-17"
                    >
                      <button
                        class="rdp-day_button DateRangePicker_dayButton"
                        type="button"
                        tabindex="-1"
                        aria-label="Wednesday, September 17th, 2025"
                      >
                        17
                      </button>
                    </td>
                    <td
                      class="rdp-day DateRangePicker_day"
                      role="gridcell"
                      data-day="2025-09-18"
                    >
                      <button
                        class="rdp-day_button DateRangePicker_dayButton"
                        type="button"
                        tabindex="-1"
                        aria-label="Thursday, September 18th, 2025"
                      >
                        18
                      </button>
                    </td>
                    <td
                      class="rdp-day DateRangePicker_day"
                      role="gridcell"
                      data-day="2025-09-19"
                    >
                      <button
                        class="rdp-day_button DateRangePicker_dayButton"
                        type="button"
                        tabindex="-1"
                        aria-label="Friday, September 19th, 2025"
                      >
                        19
                      </button>
                    </td>
                    <td
                      class="rdp-day DateRangePicker_day"
                      role="gridcell"
                      data-day="2025-09-20"
                    >
                      <button
                        class="rdp-day_button DateRangePicker_dayButton"
                        type="button"
                        tabindex="-1"
                        aria-label="Saturday, September 20th, 2025"
                      >
                        20
                      </button>
                    </td>
                  </tr>
                  <tr class="rdp-week">
                    <td
                      class="rdp-day DateRangePicker_day"
                      role="gridcell"
                      data-day="2025-09-21"
                    >
                      <button
                        class="rdp-day_button DateRangePicker_dayButton"
                        type="button"
                        tabindex="-1"
                        aria-label="Sunday, September 21st, 2025"
                      >
                        21
                      </button>
                    </td>
                    <td
                      class="rdp-day DateRangePicker_day"
                      role="gridcell"
                      data-day="2025-09-22"
                    >
                      <button
                        class="rdp-day_button DateRangePicker_dayButton"
                        type="button"
                        tabindex="-1"
                        aria-label="Monday, September 22nd, 2025"
                      >
                        22
                      </button>
                    </td>
                    <td
                      class="rdp-day DateRangePicker_day"
                      role="gridcell"
                      data-day="2025-09-23"
                    >
                      <button
                        class="rdp-day_button DateRangePicker_dayButton"
                        type="button"
                        tabindex="-1"
                        aria-label="Tuesday, September 23rd, 2025"
                      >
                        23
                      </button>
                    </td>
                    <td
                      class="rdp-day DateRangePicker_day"
                      role="gridcell"
                      data-day="2025-09-24"
                    >
                      <button
                        class="rdp-day_button DateRangePicker_dayButton"
                        type="button"
                        tabindex="-1"
                        aria-label="Wednesday, September 24th, 2025"
                      >
                        24
                      </button>
                    </td>
                    <td
                      class="rdp-day DateRangePicker_day"
                      role="gridcell"
                      data-day="2025-09-25"
                    >
                      <button
                        class="rdp-day_button DateRangePicker_dayButton"
                        type="button"
                        tabindex="-1"
                        aria-label="Thursday, September 25th, 2025"
                      >
                        25
                      </button>
                    </td>
                    <td
                      class="rdp-day DateRangePicker_day"
                      role="gridcell"
                      data-day="2025-09-26"
                    >
                      <button
                        class="rdp-day_button DateRangePicker_dayButton"
                        type="button"
                        tabindex="-1"
                        aria-label="Friday, September 26th, 2025"
                      >
                        26
                      </button>
                    </td>
                    <td
                      class="rdp-day DateRangePicker_day"
                      role="gridcell"
                      data-day="2025-09-27"
                    >
                      <button
                        class="rdp-day_button DateRangePicker_dayButton"
                        type="button"
                        tabindex="-1"
                        aria-label="Saturday, September 27th, 2025"
                      >
                        27
                      </button>
                    </td>
                  </tr>
                  <tr class="rdp-week">
                    <td
                      class="rdp-day DateRangePicker_day"
                      role="gridcell"
                      data-day="2025-09-28"
                    >
                      <button
                        class="rdp-day_button DateRangePicker_dayButton"
                        type="button"
                        tabindex="-1"
                        aria-label="Sunday, September 28th, 2025"
                      >
                        28
                      </button>
                    </td>
                    <td
                      class="rdp-day DateRangePicker_day"
                      role="gridcell"
                      data-day="2025-09-29"
                    >
                      <button
                        class="rdp-day_button DateRangePicker_dayButton"
                        type="button"
                        tabindex="-1"
                        aria-label="Monday, September 29th, 2025"
                      >
                        29
                      </button>
                    </td>
                    <td
                      class="rdp-day DateRangePicker_day"
                      role="gridcell"
                      data-day="2025-09-30"
                    >
                      <button
                        class="rdp-day_button DateRangePicker_dayButton"
                        type="button"
                        tabindex="-1"
                        aria-label="Tuesday, September 30th, 2025"
                      >
                        30
                      </button>
                    </td>
                    <td
                      class="rdp-day DateRangePicker_day rdp-hidden rdp-outside"
                      role="gridcell"
                      data-day="2025-10-01"
                      data-month="2025-10"
                      data-hidden="true"
                      data-outside="true"
                    ></td>
                    <td
                      class="rdp-day DateRangePicker_day rdp-hidden rdp-outside"
                      role="gridcell"
                      data-day="2025-10-02"
                      data-month="2025-10"
                      data-hidden="true"
                      data-outside="true"
                    ></td>
                    <td
                      class="rdp-day DateRangePicker_day rdp-hidden rdp-outside"
                      role="gridcell"
                      data-day="2025-10-03"
                      data-month="2025-10"
                      data-hidden="true"
                      data-outside="true"
                    ></td>
                    <td
                      class="rdp-day DateRangePicker_day rdp-hidden rdp-outside"
                      role="gridcell"
                      data-day="2025-10-04"
                      data-month="2025-10"
                      data-hidden="true"
                      data-outside="true"
                    ></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="rdp-month DateRangePicker_month">
              <div class="rdp-month_caption DateRangePicker_monthCaption">
                <span class="rdp-caption_label" role="status" aria-live="polite"
                  >October 2025</span
                >
              </div>
              <table
                role="grid"
                aria-multiselectable="true"
                aria-label="October 2025"
                class="rdp-month_grid DateRangePicker_monthGrid"
              >
                <thead aria-hidden="true">
                  <tr class="rdp-weekdays">
                    <th aria-label="Sunday" class="rdp-weekday" scope="col">
                      Su
                    </th>
                    <th aria-label="Monday" class="rdp-weekday" scope="col">
                      Mo
                    </th>
                    <th aria-label="Tuesday" class="rdp-weekday" scope="col">
                      Tu
                    </th>
                    <th aria-label="Wednesday" class="rdp-weekday" scope="col">
                      We
                    </th>
                    <th aria-label="Thursday" class="rdp-weekday" scope="col">
                      Th
                    </th>
                    <th aria-label="Friday" class="rdp-weekday" scope="col">
                      Fr
                    </th>
                    <th aria-label="Saturday" class="rdp-weekday" scope="col">
                      Sa
                    </th>
                  </tr>
                </thead>
                <tbody class="rdp-weeks">
                  <tr class="rdp-week">
                    <td
                      class="rdp-day DateRangePicker_day rdp-hidden rdp-outside"
                      role="gridcell"
                      data-day="2025-09-28"
                      data-month="2025-09"
                      data-hidden="true"
                      data-outside="true"
                    ></td>
                    <td
                      class="rdp-day DateRangePicker_day rdp-hidden rdp-outside"
                      role="gridcell"
                      data-day="2025-09-29"
                      data-month="2025-09"
                      data-hidden="true"
                      data-outside="true"
                    ></td>
                    <td
                      class="rdp-day DateRangePicker_day rdp-hidden rdp-outside"
                      role="gridcell"
                      data-day="2025-09-30"
                      data-month="2025-09"
                      data-hidden="true"
                      data-outside="true"
                    ></td>
                    <td
                      class="rdp-day DateRangePicker_day"
                      role="gridcell"
                      data-day="2025-10-01"
                    >
                      <button
                        class="rdp-day_button DateRangePicker_dayButton"
                        type="button"
                        tabindex="-1"
                        aria-label="Wednesday, October 1st, 2025"
                      >
                        1
                      </button>
                    </td>
                    <td
                      class="rdp-day DateRangePicker_day"
                      role="gridcell"
                      data-day="2025-10-02"
                    >
                      <button
                        class="rdp-day_button DateRangePicker_dayButton"
                        type="button"
                        tabindex="-1"
                        aria-label="Thursday, October 2nd, 2025"
                      >
                        2
                      </button>
                    </td>
                    <td
                      class="rdp-day DateRangePicker_day"
                      role="gridcell"
                      data-day="2025-10-03"
                    >
                      <button
                        class="rdp-day_button DateRangePicker_dayButton"
                        type="button"
                        tabindex="-1"
                        aria-label="Friday, October 3rd, 2025"
                      >
                        3
                      </button>
                    </td>
                    <td
                      class="rdp-day DateRangePicker_day"
                      role="gridcell"
                      data-day="2025-10-04"
                    >
                      <button
                        class="rdp-day_button DateRangePicker_dayButton"
                        type="button"
                        tabindex="-1"
                        aria-label="Saturday, October 4th, 2025"
                      >
                        4
                      </button>
                    </td>
                  </tr>
                  <tr class="rdp-week">
                    <td
                      class="rdp-day DateRangePicker_day"
                      role="gridcell"
                      data-day="2025-10-05"
                    >
                      <button
                        class="rdp-day_button DateRangePicker_dayButton"
                        type="button"
                        tabindex="-1"
                        aria-label="Sunday, October 5th, 2025"
                      >
                        5
                      </button>
                    </td>
                    <td
                      class="rdp-day DateRangePicker_day"
                      role="gridcell"
                      data-day="2025-10-06"
                    >
                      <button
                        class="rdp-day_button DateRangePicker_dayButton"
                        type="button"
                        tabindex="-1"
                        aria-label="Monday, October 6th, 2025"
                      >
                        6
                      </button>
                    </td>
                    <td
                      class="rdp-day DateRangePicker_day"
                      role="gridcell"
                      data-day="2025-10-07"
                    >
                      <button
                        class="rdp-day_button DateRangePicker_dayButton"
                        type="button"
                        tabindex="-1"
                        aria-label="Tuesday, October 7th, 2025"
                      >
                        7
                      </button>
                    </td>
                    <td
                      class="rdp-day DateRangePicker_day"
                      role="gridcell"
                      data-day="2025-10-08"
                    >
                      <button
                        class="rdp-day_button DateRangePicker_dayButton"
                        type="button"
                        tabindex="-1"
                        aria-label="Wednesday, October 8th, 2025"
                      >
                        8
                      </button>
                    </td>
                    <td
                      class="rdp-day DateRangePicker_day"
                      role="gridcell"
                      data-day="2025-10-09"
                    >
                      <button
                        class="rdp-day_button DateRangePicker_dayButton"
                        type="button"
                        tabindex="-1"
                        aria-label="Thursday, October 9th, 2025"
                      >
                        9
                      </button>
                    </td>
                    <td
                      class="rdp-day DateRangePicker_day"
                      role="gridcell"
                      data-day="2025-10-10"
                    >
                      <button
                        class="rdp-day_button DateRangePicker_dayButton"
                        type="button"
                        tabindex="-1"
                        aria-label="Friday, October 10th, 2025"
                      >
                        10
                      </button>
                    </td>
                    <td
                      class="rdp-day DateRangePicker_day"
                      role="gridcell"
                      data-day="2025-10-11"
                    >
                      <button
                        class="rdp-day_button DateRangePicker_dayButton"
                        type="button"
                        tabindex="-1"
                        aria-label="Saturday, October 11th, 2025"
                      >
                        11
                      </button>
                    </td>
                  </tr>
                  <tr class="rdp-week">
                    <td
                      class="rdp-day DateRangePicker_day"
                      role="gridcell"
                      data-day="2025-10-12"
                    >
                      <button
                        class="rdp-day_button DateRangePicker_dayButton"
                        type="button"
                        tabindex="-1"
                        aria-label="Sunday, October 12th, 2025"
                      >
                        12
                      </button>
                    </td>
                    <td
                      class="rdp-day DateRangePicker_day"
                      role="gridcell"
                      data-day="2025-10-13"
                    >
                      <button
                        class="rdp-day_button DateRangePicker_dayButton"
                        type="button"
                        tabindex="-1"
                        aria-label="Monday, October 13th, 2025"
                      >
                        13
                      </button>
                    </td>
                    <td
                      class="rdp-day DateRangePicker_day"
                      role="gridcell"
                      data-day="2025-10-14"
                    >
                      <button
                        class="rdp-day_button DateRangePicker_dayButton"
                        type="button"
                        tabindex="-1"
                        aria-label="Tuesday, October 14th, 2025"
                      >
                        14
                      </button>
                    </td>
                    <td
                      class="rdp-day DateRangePicker_day"
                      role="gridcell"
                      data-day="2025-10-15"
                    >
                      <button
                        class="rdp-day_button DateRangePicker_dayButton"
                        type="button"
                        tabindex="-1"
                        aria-label="Wednesday, October 15th, 2025"
                      >
                        15
                      </button>
                    </td>
                    <td
                      class="rdp-day DateRangePicker_day"
                      role="gridcell"
                      data-day="2025-10-16"
                    >
                      <button
                        class="rdp-day_button DateRangePicker_dayButton"
                        type="button"
                        tabindex="-1"
                        aria-label="Thursday, October 16th, 2025"
                      >
                        16
                      </button>
                    </td>
                    <td
                      class="rdp-day DateRangePicker_day"
                      role="gridcell"
                      data-day="2025-10-17"
                    >
                      <button
                        class="rdp-day_button DateRangePicker_dayButton"
                        type="button"
                        tabindex="-1"
                        aria-label="Friday, October 17th, 2025"
                      >
                        17
                      </button>
                    </td>
                    <td
                      class="rdp-day DateRangePicker_day"
                      role="gridcell"
                      data-day="2025-10-18"
                    >
                      <button
                        class="rdp-day_button DateRangePicker_dayButton"
                        type="button"
                        tabindex="-1"
                        aria-label="Saturday, October 18th, 2025"
                      >
                        18
                      </button>
                    </td>
                  </tr>
                  <tr class="rdp-week">
                    <td
                      class="rdp-day DateRangePicker_day"
                      role="gridcell"
                      data-day="2025-10-19"
                    >
                      <button
                        class="rdp-day_button DateRangePicker_dayButton"
                        type="button"
                        tabindex="-1"
                        aria-label="Sunday, October 19th, 2025"
                      >
                        19
                      </button>
                    </td>
                    <td
                      class="rdp-day DateRangePicker_day"
                      role="gridcell"
                      data-day="2025-10-20"
                    >
                      <button
                        class="rdp-day_button DateRangePicker_dayButton"
                        type="button"
                        tabindex="-1"
                        aria-label="Monday, October 20th, 2025"
                      >
                        20
                      </button>
                    </td>
                    <td
                      class="rdp-day DateRangePicker_day"
                      role="gridcell"
                      data-day="2025-10-21"
                    >
                      <button
                        class="rdp-day_button DateRangePicker_dayButton"
                        type="button"
                        tabindex="-1"
                        aria-label="Tuesday, October 21st, 2025"
                      >
                        21
                      </button>
                    </td>
                    <td
                      class="rdp-day DateRangePicker_day"
                      role="gridcell"
                      data-day="2025-10-22"
                    >
                      <button
                        class="rdp-day_button DateRangePicker_dayButton"
                        type="button"
                        tabindex="-1"
                        aria-label="Wednesday, October 22nd, 2025"
                      >
                        22
                      </button>
                    </td>
                    <td
                      class="rdp-day DateRangePicker_day"
                      role="gridcell"
                      data-day="2025-10-23"
                    >
                      <button
                        class="rdp-day_button DateRangePicker_dayButton"
                        type="button"
                        tabindex="-1"
                        aria-label="Thursday, October 23rd, 2025"
                      >
                        23
                      </button>
                    </td>
                    <td
                      class="rdp-day DateRangePicker_day"
                      role="gridcell"
                      data-day="2025-10-24"
                    >
                      <button
                        class="rdp-day_button DateRangePicker_dayButton"
                        type="button"
                        tabindex="-1"
                        aria-label="Friday, October 24th, 2025"
                      >
                        24
                      </button>
                    </td>
                    <td
                      class="rdp-day DateRangePicker_day"
                      role="gridcell"
                      data-day="2025-10-25"
                    >
                      <button
                        class="rdp-day_button DateRangePicker_dayButton"
                        type="button"
                        tabindex="-1"
                        aria-label="Saturday, October 25th, 2025"
                      >
                        25
                      </button>
                    </td>
                  </tr>
                  <tr class="rdp-week">
                    <td
                      class="rdp-day DateRangePicker_day"
                      role="gridcell"
                      data-day="2025-10-26"
                    >
                      <button
                        class="rdp-day_button DateRangePicker_dayButton"
                        type="button"
                        tabindex="-1"
                        aria-label="Sunday, October 26th, 2025"
                      >
                        26
                      </button>
                    </td>
                    <td
                      class="rdp-day DateRangePicker_day"
                      role="gridcell"
                      data-day="2025-10-27"
                    >
                      <button
                        class="rdp-day_button DateRangePicker_dayButton"
                        type="button"
                        tabindex="-1"
                        aria-label="Monday, October 27th, 2025"
                      >
                        27
                      </button>
                    </td>
                    <td
                      class="rdp-day DateRangePicker_day"
                      role="gridcell"
                      data-day="2025-10-28"
                    >
                      <button
                        class="rdp-day_button DateRangePicker_dayButton"
                        type="button"
                        tabindex="-1"
                        aria-label="Tuesday, October 28th, 2025"
                      >
                        28
                      </button>
                    </td>
                    <td
                      class="rdp-day DateRangePicker_day"
                      role="gridcell"
                      data-day="2025-10-29"
                    >
                      <button
                        class="rdp-day_button DateRangePicker_dayButton"
                        type="button"
                        tabindex="-1"
                        aria-label="Wednesday, October 29th, 2025"
                      >
                        29
                      </button>
                    </td>
                    <td
                      class="rdp-day DateRangePicker_day"
                      role="gridcell"
                      data-day="2025-10-30"
                    >
                      <button
                        class="rdp-day_button DateRangePicker_dayButton"
                        type="button"
                        tabindex="-1"
                        aria-label="Thursday, October 30th, 2025"
                      >
                        30
                      </button>
                    </td>
                    <td
                      class="rdp-day DateRangePicker_day"
                      role="gridcell"
                      data-day="2025-10-31"
                    >
                      <button
                        class="rdp-day_button DateRangePicker_dayButton"
                        type="button"
                        tabindex="-1"
                        aria-label="Friday, October 31st, 2025"
                      >
                        31
                      </button>
                    </td>
                    <td
                      class="rdp-day DateRangePicker_day rdp-hidden rdp-outside"
                      role="gridcell"
                      data-day="2025-11-01"
                      data-month="2025-11"
                      data-hidden="true"
                      data-outside="true"
                    ></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="DateRangePicker_footer">
          <button
            class="Button_button Button_secondary Button_small Button_wide"
            data-analytic-label="clearCalendarDate"
          >
            <span class="Button_content">Clear all</span></button
          ><button
            class="Button_button Button_primary Button_small Button_wide"
            data-analytic-label="applyCalendarDate"
          >
            <span class="Button_content">Apply</span>
          </button>
        </div>
      </div>
    </div> -->
    <div class="DateFilters_chip__ar_Yb">
      <p class="Typography_p5">Today</p>
    </div>
    <div class="DateFilters_chip__ar_Yb">
      <p class="Typography_p5">Tomorrow</p>
    </div>
    <div class="DateFilters_chip__ar_Yb">
      <p class="Typography_p5">This week</p>
    </div>
    <div class="DateFilters_chip__ar_Yb">
      <p class="Typography_p5">This month</p>
    </div>
    <div class="InAppRegisterSelector_wrapper">
      <span
        data-test-id=""
        class="Icon_iconWrapper InAppRegisterSelector_icon__d_bhN"
        ><svg
          width="21"
          height="20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="Icon_icon"
        >
          <circle cx="10.227" cy="10" r="10" fill="#D90217"></circle>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.985 14.167c2.145 0 3.43-1.17 3.43-2.646 0-2.28-3.775-2.053-3.775-2.827 0-.259.282-.517.845-.517.91 0 1.817.502 2.208.913l1.16-1.445c-.832-.745-2.1-1.186-3.369-1.186H5.602l.012.068c.258 1.19 1.023 1.924 2.369 2.274-.33.07-.681.236-.931.416.464.787 1.83 1.446 3.36 1.871.834.258 1.59.42 1.59.844 0 .288-.313.532-.799.532-1.065 0-2.224-.654-2.694-1.14l-1.27 1.504c.924.867 2.35 1.339 3.744 1.339h.002Z"
            fill="#fff"
          ></path></svg
      ></span>
      <p class="Typography_p5">Register</p>
    </div>
  </div>
</template>
<style scoped>
.DateSelector_wrapper {
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
  gap: 8px;
}

.DateRangePicker_dateWrapper {
  position: relative;
  flex-shrink: 0;
}

.DateRangePicker_chip__uKn_1 {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  border-radius: 24px;
  background: var(--background-secondary);
  cursor: pointer;
}

.DateRangePicker_chip__uKn_1.DateRangePicker_withIcon {
  -webkit-padding-start: 16px;
  padding-inline-start: 16px;
}

.DateRangePicker_chip__uKn_1.DateRangePicker_active {
  background: var(--control-active);
  color: var(--text-invert-primary);
}

.DateRangePicker_chip__uKn_1.DateRangePicker_withIcon {
  -webkit-padding-start: 16px;
  padding-inline-start: 16px;
}

.Icon_iconWrapper {
  display: block;
  position: relative;
}

.Icon_icon {
  display: block;
  max-width: 100%;
}
.InAppRegisterSelector_wrapper {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px 12px 16px;
  border-radius: 24px;
  background: var(--background-secondary);
  cursor: pointer;
}

.InAppRegisterSelector_wrapper.InAppRegisterSelector_active__YKts_ {
  background: var(--control-active);
  color: var(--text-invert-primary);
}

.InAppRegisterSelector_wrapper .InAppRegisterSelector_icon__d_bhN {
  width: 20px;
  height: 20px;
}

:root[lang="ar"] .InAppRegisterSelector_wrapper {
  padding: 12px 16px 12px 20px;
}

.DateFilters_chip__ar_Yb {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  border-radius: 24px;
  background: var(--background-secondary);
  cursor: pointer;
  flex-shrink: 0;
}

.DateFilters_chip__ar_Yb.DateFilters_active {
  background: var(--control-active);
  color: var(--text-invert-primary);
}
.Popup_popupEnterDone {
  opacity: 1;
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

@media (max-width: 767px) {
  .DateSelector_wrapper {
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
    scrollbar-width: none;
    overflow-y: auto;
    -webkit-overflow-scrolling: auto;
  }

  .DateSelector_wrapper::-webkit-scrollbar {
    display: none;
  }
}
</style>
