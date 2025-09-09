"use client";
import React, { Fragment, ReactNode } from "react";
import { EuiSpacer, EuiText } from "@elastic/eui";
import IssueList from "@/Components/DashboardPage/IssueList";

// ---------------------------------------------- DASHBOARD METRICS

interface Metrics {
  id: number;
  title: string;
  icon: string;
  number: string;
  extraText?: string;
}

export const dashboardMetrics: Metrics[] = [
  {
    id: 1,
    icon: "/Dashboard/Metrics/phone.png",
    title: "Number of Calls",
    number: "17,056",
  },
  {
    id: 2,
    icon: "/Dashboard/Metrics/performance.png",
    title: "Avg Scores",
    number: "79.02%",
  },
  {
    id: 3,
    icon: "/Dashboard/Metrics/timer.png",
    title: "Avg Call Time",
    number: "4.61",
    extraText: "Minutes",
  },
];

// ------------------------------------------------------------- TOP AND LOW PERFORMER
interface Performance {
  id: number;
  score: number;
  performerCategory: "Top" | "Low";
  employeeName: string;
}

export const performersData: Performance[] = [
  {
    id: 1,
    score: 83,
    performerCategory: "Top",
    employeeName: "Shahvez Hassan",
  },
  {
    id: 2,
    score: 54,
    performerCategory: "Low",
    employeeName: "Ahmed Hanif",
  },
];

// -------------------------------------------------------------------- KEY AREAS

interface Issue {
  id: number;
  text: string;
  percentage: number;
}

const improvementIssues: Issue[] = [
  {
    id: 1,
    text: "CSRs are unable to fully answer the customers' questions",
    percentage: 4.29,
  },
  {
    id: 2,
    text: "CSRs are failing to provide a polite and appropriate closure",
    percentage: 93.23,
  },
  {
    id: 3,
    text: "CSRs do not consistently demonstrate compassion or empathy",
    percentage: 98.24,
  },
  {
    id: 4,
    text: "CSRs are not verifying the patient's identity before disclosure",
    percentage: 98.43,
  },
];

const excellenceIssues: Issue[] = [
  {
    id: 1,
    text: "CSRs consistently greet customers warmly",
    percentage: 95.12,
  },
  {
    id: 2,
    text: "CSRs provide accurate information promptly",
    percentage: 92.87,
  },
  { id: 3, text: "CSRs show empathy and patience", percentage: 90.45 },
];

interface TabData {
  id: string;
  name: string;
  content: ReactNode;
}

export const tabsData: TabData[] = [
  {
    id: "improvement--id",
    name: "Areas of Improvement",
    content: (
      <Fragment>
        <EuiSpacer />
        <IssueList issues={improvementIssues} />
      </Fragment>
    ),
  },
  {
    id: "excellence--id",
    name: "Areas of Excellence",
    content: (
      <Fragment>
        <EuiSpacer />
        <IssueList issues={excellenceIssues} />
      </Fragment>
    ),
  },
];

// ----------------------------------------------------------- METRICS TABLE DATA

export const metricsColumns = [
  " ",
  "Call Volume",
  "Avg. Call Mins",
  "Active Agent",
  "Satisfaction Score",
  "Call per Agent",
];

export const metricsRows = [
  {
    " ": "MTD",
    "Call Volume": "0",
    "Avg. Call Mins": "0",
    "Active Agent": "0",
    "Satisfaction Score": "0",
    "Call per Agent": "0",
  },
  {
    " ": "Last 30 days",
    "Call Volume": "17,056",
    "Avg. Call Mins": "4.60",
    "Active Agent": "89",
    "Satisfaction Score": "63.49",
    "Call per Agent": "191.64",
  },
  {
    " ": "Last week",
    "Call Volume": "0",
    "Avg. Call Mins": "0",
    "Active Agent": "0",
    "Satisfaction Score": "0",
    "Call per Agent": "0",
  },
  {
    " ": "Today",
    "Call Volume": "0",
    "Avg. Call Mins": "0",
    "Active Agent": "0",
    "Satisfaction Score": "0",
    "Call per Agent": "0",
  },
];

// ----------------------------------------------------------- AGENTS TABLE DATA

export const agentsColumns = [
  "Agent",
  "Calls",
  "QA Call Score %",
  "Avg. Call Time",
];

export const agentsRows = [
  {
    Agent: "Shahvez Hassam",
    Calls: "296",
    "QA Call Score %": "82 %.55",
    "Avg. Call Time": "4",
  },
  {
    Agent: "Abdul Abbasi",
    Calls: "303",
    "QA Call Score %": "82.43 %",
    "Avg. Call Time": "4.79",
  },
  {
    Agent: "Ateeq Rehman",
    Calls: "21",
    "QA Call Score %": "82.26 %",
    "Avg. Call Time": "4.22",
  },
  {
    Agent: "Muhammad Nouman",
    Calls: "338",
    "QA Call Score %": "81.83 %",
    "Avg. Call Time": "4.22",
  },
  {
    Agent: "Ahmer Fida",
    Calls: "277",
    "QA Call Score %": "81.75 %",
    "Avg. Call Time": "4.42",
  },
  {
    Agent: "Haroon Mehmood",
    Calls: "425",
    "QA Call Score %": "81.71 %",
    "Avg. Call Time": "6.10",
  },
  {
    Agent: "Obaid Rehman",
    Calls: "412",
    "QA Call Score %": "81.63 %",
    "Avg. Call Time": "4.60",
  },
  {
    Agent: "Khizer Farooq",
    Calls: "56",
    "QA Call Score %": "81.58 %",
    "Avg. Call Time": "4.45",
  },
  {
    Agent: "Huzaifa Tahir",
    Calls: "288",
    "QA Call Score %": "81.44 %",
    "Avg. Call Time": "4.53",
  },
  {
    Agent: "Muhammad Abbas",
    Calls: "22",
    "QA Call Score %": "81.42 %",
    "Avg. Call Time": "4.52",
  },
  {
    Agent: "Shahvez Hassam",
    Calls: "296",
    "QA Call Score %": "82.55%",
    "Avg. Call Time": "4",
  },
  {
    Agent: "Abdul Abbasi",
    Calls: "303",
    "QA Call Score %": "82.43 %",
    "Avg. Call Time": "4.79",
  },
  {
    Agent: "Ateeq Rehman",
    Calls: "21",
    "QA Call Score %": "82.26 %",
    "Avg. Call Time": "4.22",
  },
  {
    Agent: "Muhammad Nouman",
    Calls: "338",
    "QA Call Score %": "81.83 %",
    "Avg. Call Time": "4.22",
  },
];

// ------------------------------------------------------------ CALL VOLUME CHART

export const timeRanges = ["5D", "1W", "MTD", "3M", "6M", "1Y"];

export const chartData = {
  labels: [
    "08/14",
    "08/15",
    "08/16",
    "08/17",
    "08/18",
    "08/19",
    "08/20",
    "08/21",
    "08/22",
    "08/23",
    "08/24",
    "08/25",
    "08/26",
    "08/27",
  ],
  datasets: [
    {
      label: "Call Volumes",
      data: [0, 1200, 1800, 0, 600, 1600, 0, 800, 1800, 0, 1000, 1700, 600, 0],
      fill: true,
      backgroundColor: "rgba(0, 123, 255, 0.2)",
      borderColor: "#0073e6",
      tension: 0.4,
    },
  ],
};

// -------------------------------------------------------- TEAM PERFORMANCE CARDS' GROUP

export const TeamPerformance = [
  {
    id: 1,
    company: "Fox Client Services",
    lead: "Sheikh Umer",
    performance: "80.95%",
  },
  {
    id: 2,
    company: "Fox Referral Source",
    lead: "Rizwan Khalid",
    performance: "80.87%",
  },
  {
    id: 3,
    company: "Phd Mils",
    lead: "Amir Jalal",
    performance: "80.62%",
  },
  {
    id: 4,
    company: "Fox Opphy",
    lead: "Husnain Ali",
    performance: "79.87%",
  },
  {
    id: 5,
    company: "Fox Welcome",
    lead: "Danish Ali",
    performance: "79.54%",
  },
  {
    id: 6,
    company: "Fox Poc",
    lead: "Ahmed Qureshi",
    performance: "78.72%",
  },
  {
    id: 7,
    company: "Phd Onion Rand",
    lead: "Usman Ahmad",
    performance: "78.67%",
  },
  {
    id: 8,
    company: "Fox Phd",
    lead: "Syed Shah",
    performance: "78.37%",
  },
  {
    id: 9,
    company: "Referral Source Specialist",
    lead: "Husnain Ali",
    performance: "77.03%",
  },
  {
    id: 10,
    company: "Phd Cch",
    lead: "Usman Ahmad",
    performance: "75.79%",
  },
  {
    id: 11,
    company: "FrontDesk-VA",
    lead: "Dr Syed Zaman",
    performance: "74.79%",
  },
];
