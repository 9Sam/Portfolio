type SpotlightCardProps = {
   children: React.ReactNode;
   className?: string;
};

export function SpotlightCard({ className = "", children }: SpotlightCardProps) {
   return (
      <div
         className={`relative h-auto bg-slate-200 bg-opacity-30 shadow dark:bg-slate-800 rounded p-px 
         before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-cyan-50  before:dark:bg-slate-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 
         after:h-96 after:-left-48 after:-top-48 after:bg-cyan-100 after:bg-opacity-20 after:dark:bg-l-primary after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] 
         overflow-hidden ${className}`}
      >
         <div className="relative h-full dark:bg-[#10101d] rounded p-5 z-20 overflow-hidden">
            {children}
         </div>
      </div>
   );
}
