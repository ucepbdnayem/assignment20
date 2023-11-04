"use client";
import { useEffect, useState } from "react";
import DashboardMaster from "@/components/DashboardMaster";


export default function Home() {

  return (
    <main>
      <DashboardMaster>
        <div className="flex gap-[30px]">
          <div>
            <section className="antialiased  text-gray-600 h-screen px-4">
              <div className="flex flex-col justify-center h-full">
                {/* Table */}
                <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                  <header className="px-5 py-4 border-b border-gray-100">
                    <h2 className="font-semibold text-gray-800">All Blog</h2>
                  </header>
                  <div className="p-3">
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                        <thead className="bg-gray-50">
                          <tr>
                            <th
                              scope="col"
                              className="px-6 py-4 font-medium text-gray-900"
                            >
                              Blog Name
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-4 font-medium text-gray-900"
                            >
                              Date
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-4 font-medium text-gray-900"
                            >
                              Blog Image
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                         
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div>
            <section className="antialiased  text-gray-600 h-screen px-4">
              <div className="flex flex-col justify-center h-full">
                {/* Table */}
                <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                  <header className="px-5 py-4 border-b border-gray-100">
                    <h2 className="font-semibold text-gray-800">All Services</h2>
                  </header>
                  <div className="p-3">
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                        <thead className="bg-gray-50">
                          <tr>
                            <th
                              scope="col"
                              className="px-6 py-4 font-medium text-gray-900"
                            >
                              Service Name
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-4 font-medium text-gray-900"
                            >
                              Date
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-4 font-medium text-gray-900"
                            >
                              Service Image
                            </th>

                            
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                          
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </DashboardMaster>
    </main>
  );
}
