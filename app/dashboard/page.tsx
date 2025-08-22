import React from 'react';
import { UserButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type Props = {};

const DashboardPage = (props: Props) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white p-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-lg flex items-center justify-center">
            <BrainIcon className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            NeuralFlow AI
          </span>
        </div>
        <UserButton afterSignOutUrl="/" />
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Welcome to Your Dashboard
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Get started with NeuralFlow AI and transform your business with intelligent automation.
          </p>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-violet-500/50 transition-all duration-300">
            <div className="h-12 w-12 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
              <AnalyticsIcon className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Analytics</h3>
            <p className="text-slate-400 mb-4">View insights and performance metrics</p>
            <Button className="w-full bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-700 hover:to-cyan-700">
              View Analytics
            </Button>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-violet-500/50 transition-all duration-300">
            <div className="h-12 w-12 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
              <SettingsIcon className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">AI Models</h3>
            <p className="text-slate-400 mb-4">Configure and train your AI models</p>
            <Button className="w-full bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-700 hover:to-cyan-700">
              Manage Models
            </Button>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-violet-500/50 transition-all duration-300">
            <div className="h-12 w-12 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
              <DatabaseIcon className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Data Sources</h3>
            <p className="text-slate-400 mb-4">Connect and manage your data integrations</p>
            <Button className="w-full bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-700 hover:to-cyan-700">
              Connect Data
            </Button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button variant="outline" className="border-slate-700 hover:border-violet-500/50 text-slate-300 hover:text-white">
              Create Workflow
            </Button>
            <Button variant="outline" className="border-slate-700 hover:border-violet-500/50 text-slate-300 hover:text-white">
              Upload Data
            </Button>
            <Button variant="outline" className="border-slate-700 hover:border-violet-500/50 text-slate-300 hover:text-white">
              View Reports
            </Button>
            <Button variant="outline" className="border-slate-700 hover:border-violet-500/50 text-slate-300 hover:text-white">
              API Documentation
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

// Icon Components
function BrainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
    </svg>
  );
}

function AnalyticsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  );
}

function SettingsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v6m0 6v6" />
      <path d="m15.4 6.4 4.2 4.2-4.2 4.2-4.2-4.2z" />
    </svg>
  );
}

function DatabaseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
      <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
    </svg>
  );
}

export default DashboardPage;
