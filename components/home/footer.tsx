export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className='flex justify-between bg-zinc-200/60 p-4 dark:bg-zinc-800/60'>
        <div>
          <p className='text-xs'>Copyright © {currentYear} Harry Yep. All rights reserved.</p>
        </div>
        <div></div>
      </div>
    </footer>
  );
}
