import { bars, chevronDown, nike, xMark } from "@/assets/icons";

const listOptions: string = `
<!--
  'Solutions' flyout menu, show/hide based on flyout menu state.

  Entering: "transition ease-out duration-200"
    From: "opacity-0 translate-y-1"
    To: "opacity-100 translate-y-0"
  Leaving: "transition ease-in duration-150"
    From: "opacity-100 translate-y-0"
    To: "opacity-0 translate-y-1"
-->
  <div class="list-options list-options--wrapper">          
    <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-white ring-opacity-5">
        <div class="relative grid gap-6 bg-gray-300 px-5 py-6 sm:gap-8 sm:p-8">  
          <a href="#" class="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50">
            <!-- Heroicon name: outline/chart-bar -->
            <svg class="h-6 w-6 flex-shrink-0 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
            </svg>
            <div class="ml-4">
              <p class="text-base font-medium text-gray-900">Analytics</p>
              <p class="mt-1 text-sm text-gray-500">Get a better understanding of where your traffic is coming from.</p>
            </div>
          </a>

          <a href="#" class="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50">
            <!-- Heroicon name: outline/cursor-arrow-rays -->
            <svg class="h-6 w-6 flex-shrink-0 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
            </svg>
            <div class="ml-4">
              <p class="text-base font-medium text-gray-900">Engagement</p>
              <p class="mt-1 text-sm text-gray-500">Speak directly to your customers in a more meaningful way.</p>
            </div>
          </a>

          <a href="#" class="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50">
            <!-- Heroicon name: outline/shield-check -->
            <svg class="h-6 w-6 flex-shrink-0 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
            <div class="ml-4">
              <p class="text-base font-medium text-gray-900">Security</p>
              <p class="mt-1 text-sm text-gray-500">Your customers&#039; data will be safe and secure.</p>
            </div>
          </a>

          <a href="#" class="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50">
            <!-- Heroicon name: outline/squares-2x2 -->
            <svg class="h-6 w-6 flex-shrink-0 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
            </svg>
            <div class="ml-4">
              <p class="text-base font-medium text-gray-900">Integrations</p>
              <p class="mt-1 text-sm text-gray-500">Connect with third-party tools that you&#039;re already using.</p>
            </div>
          </a>

          <a href="#" class="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50">
            <!-- Heroicon name: outline/arrow-path -->
            <svg class="h-6 w-6 flex-shrink-0 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12c0-1.232.046-2.453.138-3.662a4.006 4.006 0 013.7-3.7 48.678 48.678 0 017.324 0 4.006 4.006 0 013.7 3.7c.017.22.032.441.046.662M4.5 12l-3-3m3 3l3-3m12 3c0 1.232-.046 2.453-.138 3.662a4.006 4.006 0 01-3.7 3.7 48.657 48.657 0 01-7.324 0 4.006 4.006 0 01-3.7-3.7c-.017-.22-.032-.441-.046-.662M19.5 12l-3 3m3-3l3 3" />
            </svg>
            <div class="ml-4">
              <p class="text-base font-medium text-gray-900">Automations</p>
              <p class="mt-1 text-sm text-gray-500">Build strategic funnels that will drive your customers to convert</p>
            </div>
          </a>
        </div>

        <div class="space-y-6 bg-gray-500 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
          <div class="flow-root">
            <a href="#" class="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100">
              <!-- Heroicon name: outline/play -->
              <svg class="h-6 w-6 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
              </svg>
              <span class="ml-3">Watch Demo</span>
            </a>
          </div>

          <div class="flow-root">
            <a href="#" class="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100">
              <!-- Heroicon name: outline/phone -->
              <svg class="h-6 w-6 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <span class="ml-3">Contact Sales</span>
            </a>
          </div>
        </div>
    </div>
  </div>
`;

const mobileMeu: string = `
<!--
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: "opacity-0 scale-95"
      To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
-->
  <div id="mobile-navbar" class="absolute duration-100 ease-in opacity-0 scale-95 inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
    <div class="divide-y-2 divide-gray-50 rounded-lg bg-gray-300 shadow-lg ring-1 ring-black ring-opacity-5">
      <div class="px-5 pt-5 pb-6">
        <div class="flex items-center justify-between">
          <div class="nav__logo">
            <a href="#">
              <span class="sr-only">Nike Shoe</span>
              ${nike}
            </a>
          </div>

          <div class="-mr-2">
            <button type="button" id="toggle-menu" class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span class="sr-only">Close menu</span>
              ${xMark}
            </button>
          </div>
        </div>

        <div class="mt-6">
          <nav class="grid gap-y-8">
            <a href="#" class="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
              <!-- Heroicon name: outline/chart-bar -->
              <svg class="h-6 w-6 flex-shrink-0 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
              </svg>
              <span class="ml-3 text-base font-medium text-gray-900">Analytics</span>
            </a>

            <a href="#" class="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
              <!-- Heroicon name: outline/cursor-arrow-rays -->
              <svg class="h-6 w-6 flex-shrink-0 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
              </svg>
              <span class="ml-3 text-base font-medium text-gray-900">Engagement</span>
            </a>

            <a href="#" class="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
              <!-- Heroicon name: outline/shield-check -->
              <svg class="h-6 w-6 flex-shrink-0 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              <span class="ml-3 text-base font-medium text-gray-900">Security</span>
            </a>

            <a href="#" class="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
              <!-- Heroicon name: outline/squares-2x2 -->
              <svg class="h-6 w-6 flex-shrink-0 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
              </svg>
              <span class="ml-3 text-base font-medium text-gray-900">Integrations</span>
            </a>

            <a href="#" class="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
              <!-- Heroicon name: outline/arrow-path -->
              <svg class="h-6 w-6 flex-shrink-0 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12c0-1.232.046-2.453.138-3.662a4.006 4.006 0 013.7-3.7 48.678 48.678 0 017.324 0 4.006 4.006 0 013.7 3.7c.017.22.032.441.046.662M4.5 12l-3-3m3 3l3-3m12 3c0 1.232-.046 2.453-.138 3.662a4.006 4.006 0 01-3.7 3.7 48.657 48.657 0 01-7.324 0 4.006 4.006 0 01-3.7-3.7c-.017-.22-.032-.441-.046-.662M19.5 12l-3 3m3-3l3 3" />
              </svg>
              <span class="ml-3 text-base font-medium text-gray-900">Automations</span>
            </a>
          </nav>
        </div>
      </div>
      <div class="space-y-6 py-6 px-5">
        <div class="grid grid-cols-2 gap-y-4 gap-x-8">
          <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">Pricing</a>

          <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">Docs</a>

          <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">Help Center</a>

          <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">Guides</a>

          <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">Events</a>

          <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">Security</a>
        </div>
        <div>
          <a href="#" class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Sign up</a>
          <p class="mt-6 text-center text-base font-medium text-gray-500">
            Existing customer?
            <a href="#" class="text-indigo-600 hover:text-indigo-500">Sign in</a>
          </p>
        </div>
      </div>
    </div>
  </div>
`;

const showLinkOptions = (elem: HTMLElement, show: string[], hide:string[]): void => { 
  const hasOptions = elem.nextElementSibling?.classList.contains("list-options");
  
  if(hasOptions) {
    elem.nextElementSibling?.classList.remove(...hide);
    elem.nextElementSibling?.classList.add(...show);
  }
}

const hideLinkOptions = (elem: HTMLElement, show: string[], hide:string[]): void => { 
  const hasOptions = elem.nextElementSibling?.classList.contains("list-options");
  
  if(hasOptions) {
    elem.nextElementSibling?.classList.remove(...show);
    elem.nextElementSibling?.classList.add(...hide);
  }
}

const linkOptins = ():void => {
  const hideClases: string[] = ["opacity-0", "translate-y-1"]; 
  const showClases: string[] = ["opacity-100", "translate-y-0"];
  const navItems = document.querySelectorAll<HTMLElement>(".nav__items")!;  

  navItems.forEach((item) => {
    item.addEventListener("pointerenter", () => showLinkOptions(item, showClases, hideClases))
    item.addEventListener("pointerleave", () => hideLinkOptions(item, showClases, hideClases))
  });
}

const toggleMobileMenu = ():void => {
  const mobileNavbar = document.querySelector<HTMLDivElement>("#mobile-navbar")!;  
  const toggleMenu = document.querySelector<HTMLButtonElement>("#toggle-menu")!;  

  toggleMenu.addEventListener("click", () => {
    mobileNavbar.classList.toggle("show-menu")
  })
}

setTimeout(() => {
  linkOptins();
  toggleMobileMenu;
}, 0);

export const Navbar = `
    <div class="relative border-b-[1px] border-gray-100">
      
      <div class="mx-auto max-w-7xl px-4 sm:px-6">     
        <div class="nav nav--wrapper"> 
          <div>
            <a href="#" class="nav__logo">
              <span class="sr-only">Nike Shoe</span>
              ${nike}
            </a>
          </div>

          <div class="-my-2 -mr-2 md:hidden">
            <button type="button" class="nav__toggle-btn" id="open-menu" aria-expanded="false">
              <span class="sr-only">Open menu</span>
              ${bars}                            
            </button>
          </div>

          <nav class="hidden space-x-10 md:flex">
            <div class="relative">  
              <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
              <button 
                type="button" 
                class="nav__items group"
                aria-expanded="false"
              >
                <span>Solutions</span>
                ${chevronDown}
              </button>

              ${listOptions}
            </div>
              
            <a href="#" class="nav__items">Pricing</a>
            <a href="#" class="nav__items">Docs</a>

            <div class="relative">  
              <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
              <button 
                type="button" 
                class="nav__items group"
                aria-expanded="false"
              >
                <span>More</span>
                ${chevronDown}
              </button>

              ${listOptions}
            </div>
          </nav>

          <div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <a href="#" class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">Sign in</a>
            <a href="#" class="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Sign up</a>
          </div>
        </div>
      </div>

      ${mobileMeu}  
    </div>
`;