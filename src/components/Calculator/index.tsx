"use client";

import { useMemo, useState, type ChangeEvent } from "react";

const VND_PER_KWH_ESTIMATE = 3100;

function parseVndDigits(value: string): number {
  const digits = value.replace(/\D/g, "");
  return digits ? parseInt(digits, 10) : 0;
}

function formatVndDigits(value: string): string {
  const n = parseVndDigits(value);
  if (n === 0) return "";
  return n.toLocaleString("vi-VN");
}

const DAY_USAGE_OPTIONS = ["10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%"];
const PHASE_OPTIONS = ["1 Pha", "3 Pha"];
const REGION_OPTIONS = [
  "Miền Nam (4.8 giờ nắng/ngày)",
  "Miền Trung (4.2 giờ nắng/ngày)",
  "Miền Bắc (3.5 giờ nắng/ngày)",
];
const HOUSEHOLD_OPTIONS = [
  "Thấp (1–2 điều hòa, thiết bị cơ bản)",
  "Trung bình (3–4 điều hòa, máy giặt, tủ lạnh lớn)",
  "Cao (5+ điều hòa, bơm nhiệt, xe điện sạc tại nhà)",
];
const INVERTER_OPTIONS = ["Hybrid On-grid", "String inverter", "Micro inverter"];
const BATTERY_OPTIONS = [
  "Tự động (theo đề xuất)",
  "Không lắp pin lưu trữ",
  "Pin 5 kWh",
  "Pin 10 kWh",
  "Pin 15 kWh trở lên",
];

const inputClass =
  "border-stroke w-full rounded-xs border bg-[#f8f8f8] px-4 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none";

function NumBadge({ n }: { n: number }) {
  return (
    <span className="inline-flex h-6 min-w-[1.375rem] shrink-0 items-center justify-center rounded-xs bg-primary px-1.5 text-xs font-bold text-white">
      {n}
    </span>
  );
}

export default function Calculator() {
  const [monthlyBill, setMonthlyBill] = useState("");
  const [dayUsage, setDayUsage] = useState("50%");
  const [phase, setPhase] = useState("1 Pha");
  const [region, setRegion] = useState(REGION_OPTIONS[0]);
  const [household, setHousehold] = useState(HOUSEHOLD_OPTIONS[1]);
  const [inverter, setInverter] = useState(INVERTER_OPTIONS[0]);
  const [battery, setBattery] = useState(BATTERY_OPTIONS[0]);

  const estimatedKwh = useMemo(() => {
    const vnd = parseVndDigits(monthlyBill);
    if (vnd <= 0) return 0;
    return Math.round(vnd / VND_PER_KWH_ESTIMATE);
  }, [monthlyBill]);

  const handleBillChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMonthlyBill(formatVndDigits(e.target.value));
  };

  const handleReset = () => {
    setMonthlyBill("");
    setDayUsage("50%");
    setPhase("1 Pha");
    setRegion(REGION_OPTIONS[0]);
    setHousehold(HOUSEHOLD_OPTIONS[1]);
    setInverter(INVERTER_OPTIONS[0]);
    setBattery(BATTERY_OPTIONS[0]);
  };

  const handleCalculate = () => {
    // Gắn logic tính toán hoặc chuyển #contact khi có công thức / API.
  };

  return (
    <section id="calculator" className="relative z-10 pt-10 pb-6">
      <div className="container">
        <div className="mx-auto max-w-4xl rounded-xs border border-stroke bg-white px-6 py-8 shadow-three dark:border-stroke-dark dark:bg-gray-dark sm:px-10">
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <span
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-yellow/15 text-2xl"
              aria-hidden
            >
              💡
            </span>
            <h2 className="text-2xl font-bold text-black dark:text-white sm:text-3xl">
              Bộ tính toán hệ thống điện mặt trời nâng cao
            </h2>
          </div>

          <div className="space-y-6">
            {/* 1 — full width */}
            <div>
              <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                <label className="flex flex-wrap items-center gap-2 text-sm font-medium text-dark dark:text-white">
                  <NumBadge n={1} />
                  <span>Nhập hóa đơn tiền điện hàng tháng (VNĐ):</span>
                </label>
                <span className="text-sm text-body-color dark:text-body-color-dark">
                  ~ {estimatedKwh.toLocaleString("vi-VN")} kWh/tháng
                </span>
              </div>
              <input
                type="text"
                inputMode="numeric"
                autoComplete="off"
                placeholder="Ví dụ: 6.000.000"
                value={monthlyBill}
                onChange={handleBillChange}
                className={inputClass}
              />
            </div>

            {/* 2 — two columns */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 flex flex-wrap items-center gap-2 text-sm font-medium text-dark dark:text-white">
                  <NumBadge n={2} />
                  <span>
                    Tỷ lệ sử dụng điện &amp; Loại điện: Tỷ lệ sử dụng điện ban
                    ngày (%):
                  </span>
                </label>
                <select
                  value={dayUsage}
                  onChange={(e) => setDayUsage(e.target.value)}
                  className={inputClass}
                >
                  {DAY_USAGE_OPTIONS.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-dark dark:text-white">
                  Loại điện:
                </label>
                <select
                  value={phase}
                  onChange={(e) => setPhase(e.target.value)}
                  className={inputClass}
                >
                  {PHASE_OPTIONS.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* 3 & 4 */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 flex flex-wrap items-center gap-2 text-sm font-medium text-dark dark:text-white">
                  <NumBadge n={3} />
                  <span>Khu vực lắp đặt:</span>
                </label>
                <select
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  className={inputClass}
                >
                  {REGION_OPTIONS.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-2 flex flex-wrap items-center gap-2 text-sm font-medium text-dark dark:text-white">
                  <NumBadge n={4} />
                  <span>Mức tải sử dụng của gia đình:</span>
                </label>
                <select
                  value={household}
                  onChange={(e) => setHousehold(e.target.value)}
                  className={inputClass}
                >
                  {HOUSEHOLD_OPTIONS.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* 5 & 6 */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 flex flex-wrap items-center gap-2 text-sm font-medium text-dark dark:text-white">
                  <NumBadge n={5} />
                  <span>Loại biến tần (có thể thay đổi):</span>
                </label>
                <select
                  value={inverter}
                  onChange={(e) => setInverter(e.target.value)}
                  className={inputClass}
                >
                  {INVERTER_OPTIONS.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-2 flex flex-wrap items-center gap-2 text-sm font-medium text-dark dark:text-white">
                  <NumBadge n={6} />
                  <span>Hoặc khách hàng lựa chọn pin lưu trữ:</span>
                </label>
                <select
                  value={battery}
                  onChange={(e) => setBattery(e.target.value)}
                  className={inputClass}
                >
                  {BATTERY_OPTIONS.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-stretch">
              <button
                type="button"
                onClick={handleCalculate}
                className="flex flex-1 items-center justify-center gap-2 rounded-xs bg-emerald-600 px-6 py-3.5 text-base font-semibold text-white shadow-btn transition hover:bg-emerald-700"
              >
                <svg
                  className="h-5 w-5 shrink-0 opacity-95"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                Tính toán ngay
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xs border border-stroke bg-gray-100 px-5 py-3.5 text-sm font-semibold text-body-color transition hover:bg-gray-200 dark:border-stroke-dark dark:bg-[#2C303B] dark:text-body-color-dark dark:hover:bg-[#363b47]"
              >
                <svg
                  className="h-4 w-4 shrink-0 text-primary"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                  <path d="M3 3v5h5" />
                  <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
                  <path d="M16 21h5v-5" />
                </svg>
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_calc)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_calc)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_calc"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_calc"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}
