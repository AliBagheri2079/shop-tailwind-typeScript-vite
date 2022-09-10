import { IProducts } from "@/global/Interface";
import {allProducts} from "@/services/all-products";
import deepClone from "@/utils/deepClone";

export const Products = () => {
    deepClone(allProducts);

    return `
    <div class="container my-4 mx-auto px-8 sm:px-0">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        ${allProducts.map((product: IProducts) => 
            `<div class="flex flex-col max-w-md p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-slate-200 dark:bg-slate-800 text-gray-800 dark:text-gray-200">
                <div class="flex space-x-4">
                    <img alt="" src="https://source.unsplash.com/100x100/?portrait" class="object-cover w-12 h-12 rounded-full shadow bg-gray-500">
                    <div class="flex flex-col space-y-1">
                        <a rel="noopener noreferrer" href="#" class="text-sm font-semibold">${product.category}</a>
                        <span class="text-xs dark:text-gray-400">4 hours ago</span>
                    </div>
                </div>
            
                <div>
                    <img src=${product.image} alt="" class="object-cover w-full mb-4 h-60 sm:h-96 bg-gray-400">
                    <h2 class="mb-1 text-xl font-semibold">${product.title}</h2>
                    <p class="text-sm dark:text-gray-400">${product.description}</p>
                </div>
                
                <div class="flex flex-wrap justify-between">
                    <div class="space-x-2">
                        <button aria-label="Share this post" type="button" class="p-2 text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 fill-current dark:text-violet-400">
                                <path d="M404,344a75.9,75.9,0,0,0-60.208,29.7L179.869,280.664a75.693,75.693,0,0,0,0-49.328L343.792,138.3a75.937,75.937,0,1,0-13.776-28.976L163.3,203.946a76,76,0,1,0,0,104.108l166.717,94.623A75.991,75.991,0,1,0,404,344Zm0-296a44,44,0,1,1-44,44A44.049,44.049,0,0,1,404,48ZM108,300a44,44,0,1,1,44-44A44.049,44.049,0,0,1,108,300ZM404,464a44,44,0,1,1,44-44A44.049,44.049,0,0,1,404,464Z"></path>
                            </svg>
                        </button>
                        <button aria-label="Bookmark this post" type="button" class="p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 fill-current dark:text-violet-400">
                                <path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
                            </svg>
                        </button>
                    </div>
                    <div class="flex space-x-2 text-sm dark:text-gray-400">
                        <button type="button" class="flex items-center p-1 space-x-1.5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" class="w-[1.2rem] h-[1.2rem] dark:text-violet-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                            <span>${product.price}</span>
                        </button>
                        <button type="button" class="flex items-center p-1 space-x-1.5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Number of likes" class="w-4 h-4 fill-current dark:text-violet-400">
                                <path d="M126.638,202.672H51.986a24.692,24.692,0,0,0-24.242,19.434,487.088,487.088,0,0,0-1.466,206.535l1.5,7.189a24.94,24.94,0,0,0,24.318,19.78h74.547a24.866,24.866,0,0,0,24.837-24.838V227.509A24.865,24.865,0,0,0,126.638,202.672ZM119.475,423.61H57.916l-.309-1.487a455.085,455.085,0,0,1,.158-187.451h61.71Z"></path>
                                <path d="M494.459,277.284l-22.09-58.906a24.315,24.315,0,0,0-22.662-15.706H332V173.137l9.573-21.2A88.117,88.117,0,0,0,296.772,35.025a24.3,24.3,0,0,0-31.767,12.1L184.693,222.937V248h23.731L290.7,67.882a56.141,56.141,0,0,1,21.711,70.885l-10.991,24.341L300,169.692v48.98l16,16H444.3L464,287.2v9.272L396.012,415.962H271.07l-86.377-50.67v37.1L256.7,444.633a24.222,24.222,0,0,0,12.25,3.329h131.6a24.246,24.246,0,0,0,21.035-12.234L492.835,310.5A24.26,24.26,0,0,0,496,298.531V285.783A24.144,24.144,0,0,0,494.459,277.284Z"></path>
                            </svg>
                            <span>${product.rating?.count}</span>
                        </button>
                    </div>
                </div>
            </div>`
        )
        .join("")}
    </div>
    </div>
    `;
}
