import React from "react";
import type { MarketplaceLayoutProps } from "@/data/types/marketplace.model";

const MarketplaceLayout: React.FC<MarketplaceLayoutProps> = ({
  topBar,
  sidebar,
  content,
  mobileContent,
  mobileBreadcrumb,
}) => {
  return (
    <section className="w-full max-w-7xl mx-auto md:ml-30 ml-0 mt-10 md:mt-25 px-4 relative app-bg app-text">
      {/* Mobile breadcrumb */}
      {mobileBreadcrumb && (
        <div className="md:hidden">{mobileBreadcrumb}</div>
      )}

      {/* Top bar: search + results/sort */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-0 w-full">
        {topBar}
      </div>

      {/* Desktop: sidebar + content */}
      <div className="hidden md:flex gap-10 mt-10">
        {/* Sidebar column */}
        <aside className="shrink-0">{sidebar}</aside>

        {/* Main content column */}
        <main className="flex-1 ml-3 mb-15">{content}</main>
      </div>

      {/* Mobile: single column */}
      <div className="md:hidden">
        {mobileContent}
      </div>
    </section>
  );
};

export default MarketplaceLayout;