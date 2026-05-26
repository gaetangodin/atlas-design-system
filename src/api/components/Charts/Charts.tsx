/**
 * Charts — thin Recharts wrappers themed with Xeekrs brand tokens.
 *
 * `recharts` is an optional peer dep. The five brand chart colors come
 * from Xeekrs's `globals.css` (`--chart-1` through `--chart-5`).
 *
 * These wrappers cover the common cases (bar, line, area, donut). For
 * advanced needs (mixed axes, custom shapes), drop down to Recharts
 * directly.
 */
"use client";
import { type ReactNode } from "react";
import {
  BarChart as RBarChart,
  LineChart as RLineChart,
  AreaChart as RAreaChart,
  PieChart as RPieChart,
  ScatterChart as RScatterChart,
  Bar,
  Line,
  Area,
  Pie,
  Cell,
  Scatter,
  ZAxis,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RTooltip,
  Legend as RLegend,
  ResponsiveContainer,
} from "recharts";

const chartColor = (n: 1 | 2 | 3 | 4 | 5) => `var(--chart-${n}, ${["#14b8a6", "#3b82f6", "#a855f7", "#ef4444", "#f97316"][n - 1]})`;

const FOREGROUND = "var(--foreground, #122120)";
const MUTED_FG = "var(--muted-foreground, #78716c)";
const BORDER = "var(--border, #ededed)";

const tooltipStyle = {
  background: "var(--popover, #fcfcf7)",
  border: `1px solid ${BORDER}`,
  borderRadius: 8,
  fontSize: 12,
  color: FOREGROUND,
  padding: "6px 10px",
};

const axisStyle = { fontSize: 11, fill: MUTED_FG };

interface SeriesConfig {
  key: string;
  label?: string;
  color?: string;
}

interface ChartCommon {
  data: ReadonlyArray<Record<string, unknown>>;
  xKey: string;
  series: ReadonlyArray<SeriesConfig>;
  height?: number;
  showGrid?: boolean;
  showLegend?: boolean;
  tooltip?: boolean;
}

function colorFor(idx: number, override?: string): string {
  if (override) return override;
  return chartColor(((idx % 5) + 1) as 1 | 2 | 3 | 4 | 5);
}

/* ---------- Bar ---------------------------------------------- */
export interface BarChartProps extends ChartCommon {
  layout?: "vertical" | "horizontal";
  stacked?: boolean;
}

export function BarChart({
  data,
  xKey,
  series,
  height = 240,
  showGrid = true,
  showLegend = false,
  tooltip = true,
  stacked = false,
}: BarChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <RBarChart data={data as Array<Record<string, unknown>>} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
        {showGrid ? <CartesianGrid stroke={BORDER} vertical={false} /> : null}
        <XAxis dataKey={xKey} tickLine={false} axisLine={false} style={axisStyle} />
        <YAxis tickLine={false} axisLine={false} style={axisStyle} />
        {tooltip ? <RTooltip contentStyle={tooltipStyle} cursor={{ fill: "rgba(18,33,32,0.04)" }} /> : null}
        {showLegend ? <RLegend wrapperStyle={{ fontSize: 12 }} /> : null}
        {series.map((s, i) => (
          <Bar
            key={s.key}
            dataKey={s.key}
            name={s.label ?? s.key}
            fill={colorFor(i, s.color)}
            radius={[6, 6, 0, 0]}
            stackId={stacked ? "a" : undefined}
          />
        ))}
      </RBarChart>
    </ResponsiveContainer>
  );
}

/* ---------- Line --------------------------------------------- */
export type LineChartProps = ChartCommon & { smooth?: boolean };

export function LineChart({
  data,
  xKey,
  series,
  height = 240,
  showGrid = true,
  showLegend = false,
  tooltip = true,
  smooth = true,
}: LineChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <RLineChart data={data as Array<Record<string, unknown>>} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
        {showGrid ? <CartesianGrid stroke={BORDER} vertical={false} /> : null}
        <XAxis dataKey={xKey} tickLine={false} axisLine={false} style={axisStyle} />
        <YAxis tickLine={false} axisLine={false} style={axisStyle} />
        {tooltip ? <RTooltip contentStyle={tooltipStyle} /> : null}
        {showLegend ? <RLegend wrapperStyle={{ fontSize: 12 }} /> : null}
        {series.map((s, i) => (
          <Line
            key={s.key}
            type={smooth ? "monotone" : "linear"}
            dataKey={s.key}
            name={s.label ?? s.key}
            stroke={colorFor(i, s.color)}
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4 }}
          />
        ))}
      </RLineChart>
    </ResponsiveContainer>
  );
}

/* ---------- Area --------------------------------------------- */
export type AreaChartProps = ChartCommon & { smooth?: boolean };

export function AreaChart({
  data,
  xKey,
  series,
  height = 240,
  showGrid = true,
  showLegend = false,
  tooltip = true,
  smooth = true,
}: AreaChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <RAreaChart data={data as Array<Record<string, unknown>>} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
        {showGrid ? <CartesianGrid stroke={BORDER} vertical={false} /> : null}
        <XAxis dataKey={xKey} tickLine={false} axisLine={false} style={axisStyle} />
        <YAxis tickLine={false} axisLine={false} style={axisStyle} />
        {tooltip ? <RTooltip contentStyle={tooltipStyle} /> : null}
        {showLegend ? <RLegend wrapperStyle={{ fontSize: 12 }} /> : null}
        {series.map((s, i) => {
          const fill = colorFor(i, s.color);
          return (
            <Area
              key={s.key}
              type={smooth ? "monotone" : "linear"}
              dataKey={s.key}
              name={s.label ?? s.key}
              stroke={fill}
              fill={fill}
              fillOpacity={0.18}
              strokeWidth={2}
            />
          );
        })}
      </RAreaChart>
    </ResponsiveContainer>
  );
}

/* ---------- Donut -------------------------------------------- */
export interface DonutChartDatum {
  label: string;
  value: number;
  color?: string;
}

export interface DonutChartProps {
  data: ReadonlyArray<DonutChartDatum>;
  height?: number;
  /** Center label / number — appears in the donut hole. */
  centerLabel?: ReactNode;
  /** Subtitle below the center label. */
  centerCaption?: ReactNode;
  showLegend?: boolean;
}

export function DonutChart({
  data,
  height = 240,
  centerLabel,
  centerCaption,
  showLegend = true,
}: DonutChartProps) {
  return (
    <div style={{ position: "relative", width: "100%", height }}>
      <ResponsiveContainer width="100%" height={height}>
        <RPieChart>
          <Pie
            data={data as DonutChartDatum[]}
            dataKey="value"
            nameKey="label"
            innerRadius="62%"
            outerRadius="92%"
            paddingAngle={2}
            stroke="none"
          >
            {data.map((d, i) => (
              <Cell key={d.label} fill={colorFor(i, d.color)} />
            ))}
          </Pie>
          <RTooltip contentStyle={tooltipStyle} />
          {showLegend ? <RLegend wrapperStyle={{ fontSize: 12 }} /> : null}
        </RPieChart>
      </ResponsiveContainer>
      {(centerLabel || centerCaption) && (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
            top: showLegend ? "-14px" : 0,
          }}
        >
          {centerLabel ? (
            <div style={{ fontSize: 24, fontWeight: 600, color: FOREGROUND, lineHeight: 1 }}>{centerLabel}</div>
          ) : null}
          {centerCaption ? (
            <div style={{ fontSize: 12, color: MUTED_FG, marginTop: 4 }}>{centerCaption}</div>
          ) : null}
        </div>
      )}
    </div>
  );
}

/* ---------- Sparkline ---------------------------------------- */
export interface SparklineProps {
  data: ReadonlyArray<{ value: number }>;
  color?: string;
  height?: number;
  fill?: boolean;
}

export function Sparkline({ data, color = chartColor(2), height = 40, fill = true }: SparklineProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <RAreaChart data={data as Array<{ value: number }>} margin={{ top: 2, right: 2, left: 2, bottom: 2 }}>
        <Area
          type="monotone"
          dataKey="value"
          stroke={color}
          fill={fill ? color : "transparent"}
          fillOpacity={0.18}
          strokeWidth={1.5}
          dot={false}
          isAnimationActive={false}
        />
      </RAreaChart>
    </ResponsiveContainer>
  );
}

/* ---------- BubbleChart -------------------------------------- */
export interface BubbleChartDatum {
  x: number;
  y: number;
  z: number;
  label?: string;
}

export interface BubbleChartProps {
  data: ReadonlyArray<BubbleChartDatum>;
  xName?: string;
  yName?: string;
  zName?: string;
  color?: string;
  height?: number;
}

export function BubbleChart({
  data,
  xName = "x",
  yName = "y",
  zName = "size",
  color = chartColor(3),
  height = 240,
}: BubbleChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <RScatterChart margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
        <CartesianGrid stroke={BORDER} vertical={false} />
        <XAxis type="number" dataKey="x" name={xName} tickLine={false} axisLine={false} style={axisStyle} />
        <YAxis type="number" dataKey="y" name={yName} tickLine={false} axisLine={false} style={axisStyle} />
        <ZAxis type="number" dataKey="z" range={[60, 600]} name={zName} />
        <RTooltip contentStyle={tooltipStyle} cursor={{ strokeDasharray: "3 3" }} />
        <Scatter data={data as BubbleChartDatum[]} fill={color} fillOpacity={0.6} stroke={color} strokeWidth={1} />
      </RScatterChart>
    </ResponsiveContainer>
  );
}
