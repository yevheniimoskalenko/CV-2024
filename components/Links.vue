<template>
    <section class=" my-3">
        <h2 class=" font-bold md:text-xl uppercase">Links to work</h2>
        <div class=" grid sm:grid-cols-2 md:grid-cols-3 gap-5 items-center justify-center">
            <NuxtLink target="_blank" :to="link.to" v-for="(link, index) in links" :key="index" class="">
                <div>
                    <NuxtImg :src="link.image" loading="lazy" class=" w-full h-full" :alt="link.alt" placeholder/>
                </div>
            </NuxtLink>
        </div>
    </section>
    </template>
    <script setup lang="ts">
    const links = ref([
    {
        key: "Nuxt.js 3 + Nest.js",
        to: "https://address-forever.com/ua",
        image: 'https://address-forever.com/_nuxt/logo.BnSYkMg8.svg',
        alt: 'address-forever'
    },
    {
        key: "Vue.js 3 + Nest.js",
        to: "https://partner.address-forever.com/",
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANEAAAAeCAYAAACyhPuOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAwISURBVHgB7VxNdts4Ei7IXsyuNSdoOjlA5MW86Z5N6BPYOYGldO8jnyDyCSLvY1s+QeQTWNnMz6qVdf6YG2hW8+YlEaY+FEAC/JetzOuO+b1HkwSBAlioPxQoKyqB/pke8+nIHpEtXpGmJZ9n1KOF+jt9ojpc6j7/PeY2oDHgo2+fLA0dxXSeqtd0V1zqS6Y3TO8VTWmkTug2uNTPmdbE3g15fFfftN3vFZf6I79PVFtH8fuO1Cl1YHXwoH+iiI8bvlzwMSYKGNlnxsVG+Ne00H+lZ5VUL/UzngRMxJTvYsoUCBgwjaHp45wV4KX+ke4CUVL/fkgdOvwfkSoRFIiF+8YoShMU1+3RlBXpRVAO73NuPAOUp9+CzhBe7daKdKGPS/rpc/lj6rAdKEpKD0QmHQx28SdVIGpw4Xn0aMyKROpf5MKnF9bLbILIKlJMv6pPG7VU7IV0eodJFYUSb3T3ULEDMOKwbUEdKrFrz89pUwVygCL9THP1DxZazaEe3SqcgiLN+HzQusWljoJQTrEia7q010f8/IQnv9xawlNpDleVWaslfJ14a5pqSLuh9dayRqxrd6lfcOgriv2LGnnt57xuuvbqPeN6sR3PqnbNeK4fEZmxx7YkITJ1rwpjJTO2iLL17JTH8Ya+FYr8Sey7FteIiFgEKx7TCbc9NPPZozOet6V54tbVGW+yuXIGV+r4S4uzwryDtrQnw4fb8N7xHVBs9BVdu7Ht2iTCkO4CEaQD0/GFBgMGtDliMwltkw2a/JAtYcbNbHgXEzySJrx0mRAiBIUQOkTmGoq3Nswpx7mGoZkEz5VZ3x1ZAS3DkQl9pX3itV+Yv2IIbswiPk8Xc3KuJyxg2eIdwkAslCEi887n7MmhqP5YqQXNbQCCrOmVGUfxPY543FCsJ4FwZxFLwmPC2c3JlaUpvKGAN26usvcAzQt+d7JGRZmI5Cw3wqmXKDkK6LflvTLGcGiutbmeuPH0Ghbi6HzPHkMSq1cEWx79F6s4ygpIBlijAz72+Ng3Wl4FlUsS1GPotZuX9D0ptIBwKWtNBCsb3wP9yv6l3aSyHbVaR06CexG8MIRWxgougzawlBmmuTEsvLpHxghBOPy+hKZfb2itd1scGuOUP/x1rFOgasT2XcvQz81JqECCVS1vlGdY8okm8ciOTmK8UJF+G96T9yz22/ZSN5cHh2Ycop2of1Jijysuqw63eqln8MOFxLhKxNQjlRg3PTLWclHRZzslAhPCSbvKnYFBICxF4RozQ//M49mzCj6jqr7CdpNcuwm1hYQBY+O51iYEiewT8ClimvvmAF1nsLSZTPcerv7K1BmpA34+MGl93MOLiwd2/c0tzQMzTjn2K8PcMmgj4LPC0bP8z7y/vIcyEYkyh1j9xD4b2Lp59APefOWsbri8WNp39XmzyvHmirJERxzMu79G11bu1nRMm/M+P+aV5fukR9WhVyGOhTKlA8mjZwelDRPc4KqSBVMqR0RtUAzlxIJAUTMFlXi6rA3WbiOVuXxR8BGVedpiu9Ncu1OqMgo+ZF/lwPSLdYkK1nNPAj6Brkp5BI91aK9XadmakziwsqCFfTGnGMrbv9MmzHth4vmRCX1ON1Kgdhh615MgCSFrj2FF3QxQHscb8ME3pmu+9sdc5M0j8zw0gv68x971xPbn837Ukvch1qw3wvfTXarC14oUpmqV2qxTIOCuEzn2xjMPnsCiOcbJZJzZ8kGayesVDURKS+dCC6xpdEVfWZ1lMFnlyMfpmfHS9BsrRPhU58Yg54ndPnAWdsjtsBiep4ttGJQLvSC3NpRQacxlYgB7dLKRIsk7F+tra3B8/pQlEGSd7O4iKmIVGDQJtTLr3+N+6nkDPr42PHBy4ebdD+UgF5k8+ry/acV7CsrmvmxDiRIqe7kdo4HLgPZPpl5V+LdKz5rq09UQAF36pHlyhck+EyAgY+/eh7h2EZq+V+cH2i6ax70NDwBhg9II/2Jb2jf3sK4v9cDw/SlbdQmdJpTNbWTbgXf71B5nW0xxl4VG2/GMoqxunmOzZvPlTNesxTfFOhzzrrFOZXs7bPVYaWQthDHEPLj/mH2gqIL0a/O3KYX6Uh9XJjNUi7CIar6UKAeECZbOXzRCkK4LNcvXZKvc87J2MW0KZULjyF7DCNTxLUmvxNpfWWPip7H7bPhA5yRXD+/62IYyELDBRlnQJmjPCJfR9Te+VWUWMwPCqUwZJNStVzR/XqdpyLYTGBo8u/aub8f7CuzaWHJY+pSfsSIR/YkH8F92e71KLwRlW1AToEC9GougK8KlsI4fzyYVdTABfa/+WZCGlgVjFkbAW60r98ogjFPbHzJby5J2MW2OGbkMIowKYn/fe8unU6sgRBKBnHJdfB+Icidwwje3JyXZxKFN6uC9l0wv9ngX0bY2oyUEjtN3QjrbKZKMd5bWbesNJCSXsa45InKpe8DxXJn9nnz4iHmZ2L6gHP2036dBJDCjTXlfO1wyH5wiGRBV1pJNs7rnQ+exKtGkQJJ+3KM6yKQs0ntkVcrCxqp62PwM1zwJiZWLqBhqZB+SlrfDMWhol33IKdmqDJLi/o38jJt8nJvYha+jC2HZL9kjWhTqilX1lWVlIw0JcRyQQasL0fxxN9fNv4d7l1WuLJzfC61Ly4VmZGn20zpuo9V/X202j8OPjS80UtdxUJZ/h015L3QzmYJSeortvp0bUh3qFSjZggJJlqQJKtgbWlSuu2AJfS+1k7ZDJs0PKSLKf2FeBmRhQi+JdjGFk7wZJKN04LUVQZd3dHQxuRNzhUxXmIHK1004GYQxngQ0RSjitJV85b6gbaH4HtJvXoHWG3hrhHTi3RJbElE5b2Ylrae5+6Twvu15P6YWMNk5fLLD3mhM1annckBzew3MKW5UFqFyqdFqJKkgNYV+2uyJxPZOGCOL+32z6Jb9GijQysbqpybh4NKfOqcYv6gnt2g3t16gHBCWS31g1jbZot9lQOesFNNc+nVkMm/FujNCKPOrDVlAU9aOMcmO/IrEks9sGNgEf9yrxtqytbCX449bA82DsTlkBqGcPtbW+feQdklK82lJskaZMHWW3ldtyWzKe9k6cHQXYZceeP3TLPDZ4IwC1f6uqJ0CjYMUZ4cOfzCofAEr0jGphtBrWwr0PfyArcO9hyorrFWkToE6dAjQKyu038kNCw98BUIGpexbqE6BOtwz9KoeFBQpr0DyFezMfnYv6BSowz2Eaqqg/0aHJD+0GucUKMoqpR/2TRrI3UmB9vb2HimlXNpxpbWeffz40ew2R4xer/d8vV6fJElisjYPHjxIN1C5fMGna67jfz0tw9d6ynSPPnz4cOr1E/P9mU/D0pnhzHSG3jimPI5Pdgygj8zWiuueurF0+H7Ra6rAinPNKfAnlQpkKtnP7OtxZw/Ewmo+W2FBvWIhf83HguXWfFYCBeLnAyvErn7MpyXq83HE9V/t7OxAkTCOGDRwbelOmNZz1w+UqoQG2r1hGntcHtlxII2LcaANfldD/PwM5Z0C3Q80KlEA+fFVRJtjayEcC+fq3bt3i/fv38+hRCywcAARFIgP7CsEG2Qs6G9Qn+vBy/Tfvn27xD2esae4cdckijJkUmW/eaEvX75oHE4xuO/EjsN8frO7uyt7R9zH58+ff7DlHe4BdjeqLWHdgtr8J58MW10DseBHNsTqW8UZs4LEfE647AecWREOWdivbf1jrv+YFQCeqHKDFsrJdYeog/As9yxmBRvYW2zmwUMNvHFEX79+/cjnEdc95PFMOCSM+FmMMI86fNfYzBNhF1nbf0LRDltPIkDY+fjExxsW+n0IKQvvhO/7LOgzPlbeugmAEKMs4vq1m7pYX4EW05jk+jzj9dEIh1dsxoFwj89Tqyw/Yh3FXuiAaSy5fEgdvnts5okAKBL+KUa9R1qR/GOKBW0ZUCIW0pm7f/jw4TELMsKqVMDZC9x4a6UFwi72GhgrPEftf0dlD3bFdSPyvjdj5XvFZc5wwEv9G+EcxsH9LPj+hvucc19jPs/IfoCJxAd1+O7RmJ2rBH5yXK5I8qO8b/mvmX7nQJKhSyrcH9xeiYCiIt17Bepw/3A3JQJEkbBg73cK1OE+4n/RSQZrzUCsAQAAAABJRU5ErkJggg==',
        alt: 'partner.address-forever'
    },
    {
        key: "Nuxt.js 2 + Sanity.io",
        to: "https://www.brandience.com/",
        image: '/brandience.webp',
        alt: 'brandience'
    },
    {
        key: "Nuxt.js 2 + Sanity.io",
        to: "https://upstream360.com/",
        image: '/upstream360.webp',
        alt: 'upstream360'
    },
    {
        key: "Nuxt.js 2 + Sanity.io",
        to: "https://onesight.essilorluxottica.com/",
        image: 'https://media-onesight.essilorluxottica.com/cms/caas/v1/media/154424/data/picture/33021c2af92f30c47d1624589e41a5d0.png?w=256&q=100',
        alt: 'onesight'
    },
    {
        key: "Nuxt.js 2 + Sanity.io",
        to: "https://www.katzteller.com/",
        image: '/katzteller.webp',
        alt: 'katzteller'
    },
    ])
    </script>