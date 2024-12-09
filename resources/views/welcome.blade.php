<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="{{ asset('css/index.css') }}">
    <title>Laravel</title>
</head>

<body class="antialiased">
    <div id="wrap" class="w-full h-screen flex flex-col gap-4 p-4">
        <div class="w-full flex flex-wrap gap-1 lg:gap-4 items-center">
            <div id="names" class="w-max flex gap-[2px] rounded-x-core overflow-hidden">
                <button data-type="Tool" data-name="Scroll"
                    class="flex gap-2 items-center justify-center font-x-core text-sm rounded-sm bg-[#3788d8] text-x-white relative p-2 lg:px-4 h-[36px] lg:h-[42px] aspect-square lg:aspect-auto outline-none hover:!text-x-black hover:bg-x-acent focus-within:!text-x-black focus-within:bg-x-acent">
                    <svg class="block w-4 h-4 lg:w-5 lg:h-5 pointer-events-none" fill="currentcolor"
                        viewBox="0 -960 960 960">
                        <path
                            d="M480-37 295-221l67-67 72 73v-165h91v165l74-72 66 66L480-37ZM216-300 37-480l180-181 66 66-68 70h165v91H215l67 68-66 66Zm528 0-66-67 68-67H581v-91h165l-68-69 66-66 179 180-179 180ZM434-581v-165l-68 68-66-66 180-179 180 179-66 66-69-68v165h-91Z" />
                    </svg>
                </button>
                <button data-type="Tool" data-name="ZoomAndPan"
                    class="flex gap-2 items-center justify-center font-x-core text-sm rounded-sm bg-[#3788d8] text-x-white relative p-2 lg:px-4 h-[36px] lg:h-[42px] aspect-square lg:aspect-auto outline-none hover:!text-x-black hover:bg-x-acent focus-within:!text-x-black focus-within:bg-x-acent">
                    <svg class="block w-4 h-4 lg:w-5 lg:h-5 pointer-events-none" fill="currentcolor"
                        viewBox="0 -960 960 960">
                        <path
                            d="m160-579-90 90q-10 11.333-23.727 10.167Q32.545-480 24.5-489q-9.5-10.091-10-22.545Q14-524 25-534l89-90H62q-13 0-22.5-9.221t-9.5-23Q30-670 39.233-679q9.234-9 22.767-9h116q20.45 0 33.225 13.188Q224-661.625 224-643v116q0 13.533-9.083 23.267Q205.833-494 192.5-494q-14.5 0-23.5-9t-9-24v-52Zm223-221h52q11.233 0 21.617 9.817Q467-780.367 467-768q0 13.533-9.75 22.767Q447.5-736 435-736H319q-21 0-33.5-13.188Q273-762.375 273-781v-117q0-12.367 8.721-22.183 8.721-9.817 22.5-9.817t23.279 9.817Q337-910.367 337-898v52l90-90q9.727-8 23.364-8.5Q464-945 473.5-935.384q9.5 9.617 9.5 22.853 0 13.237-10 22.531l-90 90ZM550-15q-24.294 0-45.147-9-20.853-9-38.06-25.036L254.941-267.287Q252-269 251-276q-1-7 1-12l-1 2q16-26 45.5-36t59.5 0l83 24v-339q0-15.35 11.658-26.675Q462.316-675 478.158-675T505-663.675Q516-652.35 516-637v297h67v-161.35q0-17.1 10.965-28.375Q604.93-541 620.772-541q15.842 0 27.035 11.613Q659-517.775 659-502v162h66v-121.821q0-15.312 11.577-27.246Q748.154-501 763.877-501t26.923 11.708q11.2 11.709 11.2 27.625V-340h67v-42q0-15.775 10.884-27.388Q890.768-421 906.491-421q15.723 0 27.116 11.612Q945-397.775 945-382v198q0 70.988-48.713 119.994Q847.575-15 777-15H550Z" />
                    </svg>
                </button>
                <button data-type="Tool" data-name="WindowLevel"
                    class="flex gap-2 items-center justify-center font-x-core text-sm rounded-sm bg-[#3788d8] text-x-white relative p-2 lg:px-4 h-[36px] lg:h-[42px] aspect-square lg:aspect-auto outline-none hover:!text-x-black hover:bg-x-acent focus-within:!text-x-black focus-within:bg-x-acent">
                    <svg class="block w-4 h-4 lg:w-5 lg:h-5 pointer-events-none" fill="currentcolor"
                        viewBox="0 -960 960 960">
                        <path
                            d="M190-99q-37.175 0-64.088-26.912Q99-152.825 99-190v-580q0-37.588 26.912-64.794Q152.825-862 190-862h580q37.588 0 64.794 27.206Q862-807.588 862-770v580q0 37.175-27.206 64.088Q807.588-99 770-99H190Zm0-91h580v-580L190-190Zm386-134h-58q-13 0-21.5-8.487t-8.5-21.466q0-12.98 8.5-21.514Q505-384 518-384h58v-58q0-13 8.487-21.5t21.466-8.5q12.98 0 21.514 8.5Q636-455 636-442v58h58q13 0 21.5 8.487t8.5 21.466q0 12.98-8.5 21.514Q707-324 694-324h-58v58q0 13-8.487 21.5t-21.466 8.5q-12.98 0-21.514-8.5Q576-253 576-266v-58ZM405-632q13 0 21.5-8.685 8.5-8.684 8.5-21.966 0-13.282-8.5-21.816Q418-693 405-693H253q-13 0-21.5 8.487t-8.5 21.466q0 12.98 8.5 22.014Q240-632 253-632h152Z" />
                    </svg>
                </button>
                <button data-type="Tool" data-name="Opacity"
                    class="flex gap-2 items-center justify-center font-x-core text-sm rounded-sm bg-[#3788d8] text-x-white relative p-2 lg:px-4 h-[36px] lg:h-[42px] aspect-square lg:aspect-auto outline-none hover:!text-x-black hover:bg-x-acent focus-within:!text-x-black focus-within:bg-x-acent">
                    <svg class="block w-4 h-4 lg:w-5 lg:h-5 pointer-events-none" fill="currentcolor"
                        viewBox="0 -960 960 960">
                        <path
                            d="M479.605-99q-141.124 0-241.364-96.975Q138-292.949 138-433.742q0-72.642 26.936-134.139Q191.872-629.378 241-675l191-189q9-10 22.25-15.5t26-5.5q12.75 0 25.75 5.5t22 15.5l191 189q49.192 45.254 76.596 106.818Q823-506.618 823-433.898q0 140.949-101.136 237.923Q620.728-99 479.605-99ZM233-401h497q7-65.172-14.692-118.742-21.691-53.569-49.364-79.393L480-782 293.726-598.866Q266-573 245-519.672 224-466.345 233-401Z" />
                    </svg>
                </button>
            </div>
            <div class="w-max flex gap-[2px]">
                <div class="w-max relative">
                    <button id="draw_trigger" x-toggle targets="#draw"
                        properties="opacity-0, pointer-events-none, translate-y-[40px]"
                        class="flex gap-2 items-center justify-center font-x-core text-sm rounded-sm bg-[#3788d8] text-x-white relative p-2 lg:px-4 h-[36px] lg:h-[42px] aspect-square lg:aspect-auto outline-none hover:!text-x-black hover:bg-x-acent focus-within:!text-x-black focus-within:bg-x-acent rounded-s-x-core">
                        <svg class="block w-4 h-4 lg:w-5 lg:h-5 pointer-events-none" fill="currentcolor"
                            viewBox="0 -960 960 960">
                            <path
                                d="M185-99q-21 0-33.5-12.5T139-145v-41q0-19 7-35t20-31l586-584q11-12 24-19t27-7q14 0 28 7t26 19l21 19q11 9 17.5 24t6.5 28q0 14-6 28t-18 25L293-126q-15 13-31 20t-35 7h-42Zm558-575 91-90-30-30-89 91 28 29ZM539-99q81 0 142.5-37T743-244q0-40-29.5-74T622-372l-54 54q51 13 79 34t28 40q0 33-39.5 55T539-167q-14 0-24 9.5T505-134q0 15 10 25t24 10ZM246-418l58-57q-72-16-104.5-31T167-538q0-13 20-28.5t89-37.5q85-26 115-56.5t30-76.5q0-56-42.5-90.5T266-862q-46 0-80.5 15.5T133-809q-10 11-9 24.5t14 22.5q9 8 23.5 7.5T185-766q15-15 33-21t48-6q45 0 66 17t21 39q0 21-18.5 36T250-667q-100 34-125.5 64T99-538q0 42 33 73t114 47Z" />
                        </svg>
                    </button>
                    <div id="draw"
                        class="bg-x-black-blur p-2 lg:p-0 flex flex-col justify-end backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none fixed inset-0 lg:inset-auto lg:w-[300px] lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-full lg:mt-2 lg:transition-all lg:duration-300 z-50 opacity-0 pointer-events-none translate-y-[40px] ">
                        <div
                            class="shadow-sm lg:shadow-x-drop bg-x-white rounded-md flex flex-col lg:rounded-x-core max-h-[70vh] overflow-hidden border border-x-shade lg:max-h-[300px]">
                            <div class="border-x-shade flex flex-col border-b p-2 gap-2">
                                <label class="text-x-black text-base text-center font-black leading-[1]">Shapes</label>
                            </div>
                            <ul class="flex flex-wrap flex-1 p-2">
                                <li class="w-[calc(100%/3)]">
                                    <a data-exec="Draw" data-draw="Livewire" href="javascript:void(0)"
                                        class="w-full flex flex-wrap flex-col gap-2 items-center p-2 rounded-md justify-center outline-none text-x-black hover:bg-x-black-blur focus-within:bg-x-black-blur">
                                        <svg class="block w-8 h-8 pointer-events-none" fill="currentcolor"
                                            viewBox="0 -960 960 960">
                                            <path
                                                d="M354.5-57q-13.5 0-24.48-8.125T314-89L214-435H102q-18.75 0-31.875-13.175Q57-461.351 57-480.175 57-499 70.125-512.5 83.25-526 102-526h144q15.921 0 26.934 9.125Q283.947-507.75 290-494l56 194 124-569q2-15 14.25-25.5T511-905q14.5 0 26.75 10T553-870l83 379 58-176q4.059-13.75 15.088-22.875Q720.118-699 737.059-699q11.941 0 23.441 8.5Q772-682 778-670l53 144h28q18.75 0 32.375 13.675Q905-498.649 905-479.825 905-461 891.375-448T859-435h-53q-13.849 0-25.424-8.5Q769-452 763-465l-21-61-67 232q-5.889 15.63-16.833 23.815Q647.222-262 632.111-263 615-262 602.5-271T588-297l-76-337L395-91q-4.25 16.387-14.625 25.823Q370-55.742 354.5-57Z" />
                                        </svg>
                                        <span class="pointer-events-none text-sm font-medium">Livewire</span>
                                    </a>
                                </li>
                                <li class="w-[calc(100%/3)]">
                                    <a data-exec="Draw" data-draw="Arrow" href="javascript:void(0)"
                                        class="w-full flex flex-wrap flex-col gap-2 items-center p-2 rounded-md justify-center outline-none text-x-black hover:bg-x-black-blur focus-within:bg-x-black-blur">
                                        <svg class="block w-8 h-8 pointer-events-none" fill="currentcolor"
                                            viewBox="0 -960 960 960">
                                            <path
                                                d="M92-239q-14-13-14.5-32T92-304l220-218q25.934-27 62.967-27T440-522l103 101 204-206h-73q-20.75 0-33.375-13.175-12.625-13.176-12.625-33Q628-692 640.625-705T674-718h182q19.75 0 32.875 13.125T902-673v183q0 19-12.272 32.5t-32.5 13.5Q838-444 824.5-457.5T811-490v-71L606-357q-27.934 27-65.467 27T478-357L375-457 157-239q-14 14-33.5 14T92-239Z" />
                                        </svg>
                                        <span class="pointer-events-none text-sm font-medium">Arrow</span>
                                    </a>
                                </li>
                                <li class="w-[calc(100%/3)]">
                                    <a data-exec="Draw" data-draw="Ruler" href="javascript:void(0)"
                                        class="w-full flex flex-wrap flex-col gap-2 items-center p-2 rounded-md justify-center outline-none text-x-black hover:bg-x-black-blur focus-within:bg-x-black-blur">
                                        <svg class="block w-8 h-8 pointer-events-none" fill="currentcolor"
                                            viewBox="0 -960 960 960">
                                            <path
                                                d="M163.12-230q-37.17 0-64.145-27.199Q72-284.399 72-321.977v-315.908q0-37.215 26.909-64.665Q125.817-730 162.987-730H796.88q37.17 0 64.145 27.381Q888-675.239 888-638.023v315.908q0 37.577-26.909 64.846Q834.183-230 797.013-230H163.12Zm-.12-92h634v-316H683v129.04q0 12.047-8.65 20.504Q665.699-480 653.825-480q-11.45 0-19.637-8.456Q626-496.913 626-508.96V-638H509v129.04q0 12.047-8.65 20.504Q491.699-480 479.825-480q-11.45 0-19.637-8.456Q452-496.913 452-508.96V-638H335v129.04q0 12.047-8.65 20.504Q317.699-480 305.825-480q-11.45 0-19.637-8.456Q278-496.913 278-508.96V-638H163v316Zm143-158Zm174 0Zm174 0Zm-174 0Z" />
                                        </svg>
                                        <span class="pointer-events-none text-sm font-medium">Ruler</span>
                                    </a>
                                </li>
                                <li class="w-[calc(100%/3)]">
                                    <a data-exec="Draw" data-draw="Protractor" href="javascript:void(0)"
                                        class="w-full flex flex-wrap flex-col gap-2 items-center p-2 rounded-md justify-center outline-none text-x-black hover:bg-x-black-blur focus-within:bg-x-black-blur">
                                        <svg class="block w-8 h-8 pointer-events-none" fill="currentcolor"
                                            viewBox="0 -960 960 960">
                                            <path
                                                d="M444-485 322.917-152.801Q323-153 319-145l-27.976 25.8Q280-110 266.1-113.643 252.2-117.286 251-133l-5-35.731q0 1 1-10.269l126-344q14 16 32.5 25.5T444-485Zm36.235-18q-55.735 0-95.485-39.644T345-638.208q0-46.232 27-83.012t69-47.18V-821q0-15.925 11.553-27.463Q464.105-860 480.053-860 496-860 508-848.463q12 11.538 12 27.463v52.6q41 10.4 68 47.18t27 83.012q0 55.92-39.515 95.564Q535.971-503 480.235-503Zm-.112-80q22.427 0 38.652-16.348T535-638.123q0-22.427-16.348-39.152T479.877-694q-22.427 0-38.652 16.63T425-637.895q0 22.42 16.348 38.657Q457.696-583 480.123-583ZM514-484q20-3 39-12.5t33-25.5l127.044 343.134q1.956 4.304-.044 10.178l-4.4 35.938q-1.04 15.179-14.82 18.964Q680-110 669.732-118.85L642-145q-5-4-5-8L514-484Z" />
                                        </svg>
                                        <span class="pointer-events-none text-sm font-medium">Protractor</span>
                                    </a>
                                </li>
                                <li class="w-[calc(100%/3)]">
                                    <a data-exec="Draw" data-draw="Rectangle" href="javascript:void(0)"
                                        class="w-full flex flex-wrap flex-col gap-2 items-center p-2 rounded-md justify-center outline-none text-x-black hover:bg-x-black-blur focus-within:bg-x-black-blur">
                                        <svg class="block w-8 h-8 pointer-events-none" fill="currentcolor"
                                            viewBox="0 -960 960 960">
                                            <path
                                                d="M679-82v-108H281q-36.413 0-63.706-26.913Q190-243.825 190-281v-398H82q-19.775 0-32.388-13.358Q37-705.716 37-724.158 37-744 49.612-757 62.225-770 82-770h108v-108q0-19.775 13.358-32.388Q216.716-923 235.158-923 255-923 268-910.388q13 12.613 13 32.388v597h597q20.2 0 33.1 13.375 12.9 13.376 12.9 32.116 0 20.141-12.9 32.825Q898.2-190 878-190H770v108q0 19.35-13.375 32.675Q743.249-36 724.509-36q-20.141 0-32.825-13.325Q679-62.65 679-82Zm0-259v-338H341v-91h338q37.175 0 64.088 26.912Q770-716.175 770-679v338h-91Z" />
                                        </svg>
                                        <span class="pointer-events-none text-sm font-medium">Rectangle</span>
                                    </a>
                                </li>
                                <li class="w-[calc(100%/3)]">
                                    <a data-exec="Draw" data-draw="Roi" href="javascript:void(0)"
                                        class="w-full flex flex-wrap flex-col gap-2 items-center p-2 rounded-md justify-center outline-none text-x-black hover:bg-x-black-blur focus-within:bg-x-black-blur">
                                        <svg class="block w-8 h-8 pointer-events-none" fill="currentcolor"
                                            viewBox="0 -960 960 960">
                                            <path
                                                d="M318-105q-24.586 0-45.08-11.375T238-150L72-435q-14-22.131-14-45.066Q58-503 72-526l166-284q14.426-22.25 34.92-34.125T318-856h326q23.034 0 43.304 11.875Q707.574-832.25 723-810l166 284q13 23.557 13 46.492 0 22.934-13 44.508L723-150q-15.426 22.25-35.696 33.625Q667.034-105 644-105H318Zm-2.333-91H645l163-284-162.664-285H316L152-480l163.667 284ZM480-480Z" />
                                        </svg>
                                        <span class="pointer-events-none text-sm font-medium">Polygon</span>
                                    </a>
                                </li>
                                <li class="w-[calc(100%/3)]">
                                    <a data-exec="Draw" data-draw="Circle" href="javascript:void(0)"
                                        class="w-full flex flex-wrap flex-col gap-2 items-center p-2 rounded-md justify-center outline-none text-x-black hover:bg-x-black-blur focus-within:bg-x-black-blur">
                                        <svg class="block w-8 h-8 pointer-events-none" fill="currentcolor"
                                            viewBox="0 -960 960 960">
                                            <path
                                                d="M479.679-59q-86.319 0-163.646-32.604-77.328-32.603-134.577-89.852-57.249-57.249-89.852-134.57Q59-393.346 59-479.862q0-87.41 32.662-164.275 32.663-76.865 90.203-134.412 57.54-57.547 134.411-90.499Q393.147-902 479.336-902q87.55 0 164.885 32.858 77.334 32.858 134.56 90.257 57.225 57.399 90.222 134.514Q902-567.257 902-479.458q0 86.734-32.952 163.382-32.952 76.648-90.499 134.2-57.547 57.551-134.421 90.214Q567.255-59 479.679-59Zm.092-91q136.742 0 233.485-96.387Q810-342.773 810-479.771q0-136.742-96.515-233.485Q616.971-810 479.729-810q-136.242 0-232.985 96.515Q150-616.971 150-479.729q0 136.242 96.387 232.985Q342.773-150 479.771-150ZM480-480Z" />
                                        </svg>
                                        <span class="pointer-events-none text-sm font-medium">Circle</span>
                                    </a>
                                </li>
                                <li class="w-[calc(100%/3)]">
                                    <a data-exec="Draw" data-draw="FreeHand" href="javascript:void(0)"
                                        class="w-full flex flex-wrap flex-col gap-2 items-center p-2 rounded-md justify-center outline-none text-x-black hover:bg-x-black-blur focus-within:bg-x-black-blur">
                                        <svg class="block w-8 h-8 pointer-events-none" fill="currentcolor"
                                            viewBox="0 -960 960 960">
                                            <path
                                                d="M573-101q-57 0-95.5-41.5T439-251q0-50 26.5-88t62.5-62q36-24 74-36.5t64-13.5q-3-48-22-69.5T589-542q-40 0-74 23t-90 102q-57 81-101.5 113T230-272q-50 0-89.5-32.5T101-417q0-29 20.5-74T193-616q38-51 50-74.5t12-43.5q0-11-6.5-17.5T230-758q-6 0-16 3t-20 12q-20 11-36.5 10.5T130-745q-14-11-14-30.5t14-32.5q23-20 49.5-31t55.5-11q47 0 78 33t31 77q0 45-19 83t-64 103q-45 68-57.5 92.5T191-411q0 27 15.5 35.5T239-367q24 0 48-22.5t71-85.5q67-88 120-123.5T597-634q63 0 108.5 45.5T757-454h58q20 0 32.5 12.5T860-410q0 20-12.5 33T815-364h-58q-11 176-78 219.5T573-101Zm3-93q21 0 52-30.5T667-359q-38 4-87.5 31T530-241q0 22 11.5 34.5T576-194Z" />
                                        </svg>
                                        <span class="pointer-events-none text-sm font-medium">FreeHand</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="w-max relative">
                    <button id="color_trigger" x-toggle targets="#color"
                        properties="opacity-0, pointer-events-none, translate-y-[40px]"
                        class="flex gap-2 items-center justify-center font-x-core text-sm rounded-sm bg-[#3788d8] text-x-white relative p-2 lg:px-4 h-[36px] lg:h-[42px] aspect-square lg:aspect-auto outline-none hover:!text-x-black hover:bg-x-acent focus-within:!text-x-black focus-within:bg-x-acent rounded-e-x-core">
                        <svg class="block w-4 h-4 lg:w-5 lg:h-5 pointer-events-none" fill="currentcolor"
                            viewBox="0 -960 960 960">
                            <path
                                d="M481-59q-86.719 0-162.86-33Q242-125 183.5-183q-58.5-58-91-134.653Q60-394.305 60-480.669 60-569 93.392-645.839q33.392-76.838 91.929-133.736 58.536-56.899 136.717-89.662Q400.218-902 487.93-902q82.916 0 157.796 28.01 74.881 28.01 131.577 78Q834-746 868-676.8q34 69.2 34 147.8 0 112-62 184.5T665-272h-61q-18 0-29.5 13.179-11.5 13.178-11.5 29.392Q563-211 573.5-201.5t10.5 31.133Q584-136 551.2-97.5 518.4-59 481-59ZM257-455q20 0 34.5-14.523 14.5-14.524 14.5-34.5Q306-524 291.267-538.5 276.533-553 257.5-553q-20.5 0-34.5 14.523-14 14.524-14 34.5Q209-484 223-469.5q14 14.5 34 14.5Zm121-163q21 0 35.5-14t14.5-34.5q0-21.5-14.5-35T379-715q-21 0-34.5 13.733Q331-687.533 331-667.5q0 21.5 13.733 35.5 13.734 14 33.267 14Zm204.5 0q20.5 0 35-14t14.5-34.5q0-21.5-14.733-35Q602.533-715 583.5-715q-21.5 0-35 13.733Q535-687.533 535-667.5q0 21.5 13.5 35.5t34 14Zm124 163q20.5 0 35-14.523 14.5-14.524 14.5-34.5Q756-524 741.5-538.5 727-553 707-553q-21 0-34.5 14.523-13.5 14.524-13.5 34.5Q659-484 672.733-469.5 686.467-455 706.5-455Z" />
                        </svg>
                    </button>
                    <div id="color"
                        class="bg-x-black-blur p-2 lg:p-0 flex flex-col justify-end backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none fixed inset-0 lg:inset-auto lg:w-[300px] lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-full lg:mt-2 lg:transition-all lg:duration-300 z-50 opacity-0 pointer-events-none translate-y-[40px] ">
                        <div
                            class="shadow-sm lg:shadow-x-drop bg-x-white rounded-md flex flex-col lg:rounded-x-core max-h-[70vh] overflow-hidden border border-x-shade lg:max-h-[300px]">
                            <div class="border-x-shade flex flex-col border-b p-2 gap-2">
                                <label class="text-x-black text-base text-center font-black leading-[1]">Colors</label>
                            </div>
                            <ul class="flex flex-wrap flex-1 p-2 gap-2 overflow-y-auto">
                                <li class="w-[calc((100%-(0.5rem*5))/6)]">
                                    <a data-exec="Color" data-color="rgb(127, 29, 29)"
                                        style="background: rgb(127, 29, 29)" href="javascript:void(0)"
                                        class="w-full rounded-md aspect-[4/3] block outline-offset-1 hover:outline-4 focus-within:outline hover:outline-x-black focus-within:outline-x-black">
                                    </a>
                                </li>
                                <li class="w-[calc((100%-(0.5rem*5))/6)]">
                                    <a data-exec="Color" data-color="rgb(153, 27, 27)"
                                        style="background: rgb(153, 27, 27)" href="javascript:void(0)"
                                        class="w-full rounded-md aspect-[4/3] block outline-offset-1 hover:outline-4 focus-within:outline hover:outline-x-black focus-within:outline-x-black">
                                    </a>
                                </li>
                                <li class="w-[calc((100%-(0.5rem*5))/6)]">
                                    <a data-exec="Color" data-color="rgb(185, 28, 28)"
                                        style="background: rgb(185, 28, 28)" href="javascript:void(0)"
                                        class="w-full rounded-md aspect-[4/3] block outline-offset-1 hover:outline-4 focus-within:outline hover:outline-x-black focus-within:outline-x-black">
                                    </a>
                                </li>
                                <li class="w-[calc((100%-(0.5rem*5))/6)]">
                                    <a data-exec="Color" data-color="rgb(220, 38, 38)"
                                        style="background: rgb(220, 38, 38)" href="javascript:void(0)"
                                        class="w-full rounded-md aspect-[4/3] block outline-offset-1 hover:outline-4 focus-within:outline hover:outline-x-black focus-within:outline-x-black">
                                    </a>
                                </li>
                                <li class="w-[calc((100%-(0.5rem*5))/6)]">
                                    <a data-exec="Color" data-color="rgb(239, 68, 68)"
                                        style="background: rgb(239, 68, 68)" href="javascript:void(0)"
                                        class="w-full rounded-md aspect-[4/3] block outline-offset-1 hover:outline-4 focus-within:outline hover:outline-x-black focus-within:outline-x-black">
                                    </a>
                                </li>
                                <li class="w-[calc((100%-(0.5rem*5))/6)]">
                                    <a data-exec="Color" data-color="rgb(248, 113, 113)"
                                        style="background: rgb(248, 113, 113)" href="javascript:void(0)"
                                        class="w-full rounded-md aspect-[4/3] block outline-offset-1 hover:outline-4 focus-within:outline hover:outline-x-black focus-within:outline-x-black">
                                    </a>
                                </li>
                                <li class="w-[calc((100%-(0.5rem*5))/6)]">
                                    <a data-exec="Color" data-color="rgb(124, 45, 18)"
                                        style="background: rgb(124, 45, 18)" href="javascript:void(0)"
                                        class="w-full rounded-md aspect-[4/3] block outline-offset-1 hover:outline-4 focus-within:outline hover:outline-x-black focus-within:outline-x-black">
                                    </a>
                                </li>
                                <li class="w-[calc((100%-(0.5rem*5))/6)]">
                                    <a data-exec="Color" data-color="rgb(154, 52, 18)"
                                        style="background: rgb(154, 52, 18)" href="javascript:void(0)"
                                        class="w-full rounded-md aspect-[4/3] block outline-offset-1 hover:outline-4 focus-within:outline hover:outline-x-black focus-within:outline-x-black">
                                    </a>
                                </li>
                                <li class="w-[calc((100%-(0.5rem*5))/6)]">
                                    <a data-exec="Color" data-color="rgb(194, 65, 12)"
                                        style="background: rgb(194, 65, 12)" href="javascript:void(0)"
                                        class="w-full rounded-md aspect-[4/3] block outline-offset-1 hover:outline-4 focus-within:outline hover:outline-x-black focus-within:outline-x-black">
                                    </a>
                                </li>
                                <li class="w-[calc((100%-(0.5rem*5))/6)]">
                                    <a data-exec="Color" data-color="rgb(234, 88, 12)"
                                        style="background: rgb(234, 88, 12)" href="javascript:void(0)"
                                        class="w-full rounded-md aspect-[4/3] block outline-offset-1 hover:outline-4 focus-within:outline hover:outline-x-black focus-within:outline-x-black">
                                    </a>
                                </li>
                                <li class="w-[calc((100%-(0.5rem*5))/6)]">
                                    <a data-exec="Color" data-color="rgb(249, 115, 22)"
                                        style="background: rgb(249, 115, 22)" href="javascript:void(0)"
                                        class="w-full rounded-md aspect-[4/3] block outline-offset-1 hover:outline-4 focus-within:outline hover:outline-x-black focus-within:outline-x-black">
                                    </a>
                                </li>
                                <li class="w-[calc((100%-(0.5rem*5))/6)]">
                                    <a data-exec="Color" data-color="rgb(251, 146, 60)"
                                        style="background: rgb(251, 146, 60)" href="javascript:void(0)"
                                        class="w-full rounded-md aspect-[4/3] block outline-offset-1 hover:outline-4 focus-within:outline hover:outline-x-black focus-within:outline-x-black">
                                    </a>
                                </li>
                                <li class="w-[calc((100%-(0.5rem*5))/6)]">
                                    <a data-exec="Color" data-color="rgb(113, 63, 18)"
                                        style="background: rgb(113, 63, 18)" href="javascript:void(0)"
                                        class="w-full rounded-md aspect-[4/3] block outline-offset-1 hover:outline-4 focus-within:outline hover:outline-x-black focus-within:outline-x-black">
                                    </a>
                                </li>
                                <li class="w-[calc((100%-(0.5rem*5))/6)]">
                                    <a data-exec="Color" data-color="rgb(133, 77, 14)"
                                        style="background: rgb(133, 77, 14)" href="javascript:void(0)"
                                        class="w-full rounded-md aspect-[4/3] block outline-offset-1 hover:outline-4 focus-within:outline hover:outline-x-black focus-within:outline-x-black">
                                    </a>
                                </li>
                                <li class="w-[calc((100%-(0.5rem*5))/6)]">
                                    <a data-exec="Color" data-color="rgb(161, 98, 7)"
                                        style="background: rgb(161, 98, 7)" href="javascript:void(0)"
                                        class="w-full rounded-md aspect-[4/3] block outline-offset-1 hover:outline-4 focus-within:outline hover:outline-x-black focus-within:outline-x-black">
                                    </a>
                                </li>
                                <li class="w-[calc((100%-(0.5rem*5))/6)]">
                                    <a data-exec="Color" data-color="rgb(202, 138, 4)"
                                        style="background: rgb(202, 138, 4)" href="javascript:void(0)"
                                        class="w-full rounded-md aspect-[4/3] block outline-offset-1 hover:outline-4 focus-within:outline hover:outline-x-black focus-within:outline-x-black">
                                    </a>
                                </li>
                                <li class="w-[calc((100%-(0.5rem*5))/6)]">
                                    <a data-exec="Color" data-color="rgb(234, 179, 8)"
                                        style="background: rgb(234, 179, 8)" href="javascript:void(0)"
                                        class="w-full rounded-md aspect-[4/3] block outline-offset-1 hover:outline-4 focus-within:outline hover:outline-x-black focus-within:outline-x-black">
                                    </a>
                                </li>
                                <li class="w-[calc((100%-(0.5rem*5))/6)]">
                                    <a data-exec="Color" data-color="rgb(250, 204, 21)"
                                        style="background: rgb(250, 204, 21)" href="javascript:void(0)"
                                        class="w-full rounded-md aspect-[4/3] block outline-offset-1 hover:outline-4 focus-within:outline hover:outline-x-black focus-within:outline-x-black">
                                    </a>
                                </li>
                                <li class="w-[calc((100%-(0.5rem*5))/6)]">
                                    <a data-exec="Color" data-color="rgb(54, 83, 20)"
                                        style="background: rgb(54, 83, 20)" href="javascript:void(0)"
                                        class="w-full rounded-md aspect-[4/3] block outline-offset-1 hover:outline-4 focus-within:outline hover:outline-x-black focus-within:outline-x-black">
                                    </a>
                                </li>
                                <li class="w-[calc((100%-(0.5rem*5))/6)]">
                                    <a data-exec="Color" data-color="rgb(63, 98, 18)"
                                        style="background: rgb(63, 98, 18)" href="javascript:void(0)"
                                        class="w-full rounded-md aspect-[4/3] block outline-offset-1 hover:outline-4 focus-within:outline hover:outline-x-black focus-within:outline-x-black">
                                    </a>
                                </li>
                                <li class="w-[calc((100%-(0.5rem*5))/6)]">
                                    <a data-exec="Color" data-color="rgb(77, 124, 15)"
                                        style="background: rgb(77, 124, 15)" href="javascript:void(0)"
                                        class="w-full rounded-md aspect-[4/3] block outline-offset-1 hover:outline-4 focus-within:outline hover:outline-x-black focus-within:outline-x-black">
                                    </a>
                                </li>
                                <li class="w-[calc((100%-(0.5rem*5))/6)]">
                                    <a data-exec="Color" data-color="rgb(101, 163, 13)"
                                        style="background: rgb(101, 163, 13)" href="javascript:void(0)"
                                        class="w-full rounded-md aspect-[4/3] block outline-offset-1 hover:outline-4 focus-within:outline hover:outline-x-black focus-within:outline-x-black">
                                    </a>
                                </li>
                                <li class="w-[calc((100%-(0.5rem*5))/6)]">
                                    <a data-exec="Color" data-color="rgb(132, 204, 22)"
                                        style="background: rgb(132, 204, 22)" href="javascript:void(0)"
                                        class="w-full rounded-md aspect-[4/3] block outline-offset-1 hover:outline-4 focus-within:outline hover:outline-x-black focus-within:outline-x-black">
                                    </a>
                                </li>
                                <li class="w-[calc((100%-(0.5rem*5))/6)]">
                                    <a data-exec="Color" data-color="rgb(163, 230, 53)"
                                        style="background: rgb(163, 230, 53)" href="javascript:void(0)"
                                        class="w-full rounded-md aspect-[4/3] block outline-offset-1 hover:outline-4 focus-within:outline hover:outline-x-black focus-within:outline-x-black">
                                    </a>
                                </li>
                                <li class="w-[calc((100%-(0.5rem*5))/6)]">
                                    <a data-exec="Color" data-color="rgb(6, 78, 59)"
                                        style="background: rgb(6, 78, 59)" href="javascript:void(0)"
                                        class="w-full rounded-md aspect-[4/3] block outline-offset-1 hover:outline-4 focus-within:outline hover:outline-x-black focus-within:outline-x-black">
                                    </a>
                                </li>
                                <li class="w-[calc((100%-(0.5rem*5))/6)]">
                                    <a data-exec="Color" data-color="rgb(6, 95, 70)"
                                        style="background: rgb(6, 95, 70)" href="javascript:void(0)"
                                        class="w-full rounded-md aspect-[4/3] block outline-offset-1 hover:outline-4 focus-within:outline hover:outline-x-black focus-within:outline-x-black">
                                    </a>
                                </li>
                                <li class="w-[calc((100%-(0.5rem*5))/6)]">
                                    <a data-exec="Color" data-color="rgb(4, 120, 87)"
                                        style="background: rgb(4, 120, 87)" href="javascript:void(0)"
                                        class="w-full rounded-md aspect-[4/3] block outline-offset-1 hover:outline-4 focus-within:outline hover:outline-x-black focus-within:outline-x-black">
                                    </a>
                                </li>
                                <li class="w-[calc((100%-(0.5rem*5))/6)]">
                                    <a data-exec="Color" data-color="rgb(5, 150, 105)"
                                        style="background: rgb(5, 150, 105)" href="javascript:void(0)"
                                        class="w-full rounded-md aspect-[4/3] block outline-offset-1 hover:outline-4 focus-within:outline hover:outline-x-black focus-within:outline-x-black">
                                    </a>
                                </li>
                                <li class="w-[calc((100%-(0.5rem*5))/6)]">
                                    <a data-exec="Color" data-color="rgb(16, 185, 129)"
                                        style="background: rgb(16, 185, 129)" href="javascript:void(0)"
                                        class="w-full rounded-md aspect-[4/3] block outline-offset-1 hover:outline-4 focus-within:outline hover:outline-x-black focus-within:outline-x-black">
                                    </a>
                                </li>
                                <li class="w-[calc((100%-(0.5rem*5))/6)]">
                                    <a data-exec="Color" data-color="rgb(52, 211, 153)"
                                        style="background: rgb(52, 211, 153)" href="javascript:void(0)"
                                        class="w-full rounded-md aspect-[4/3] block outline-offset-1 hover:outline-4 focus-within:outline hover:outline-x-black focus-within:outline-x-black">
                                    </a>
                                </li>
                                <li class="w-[calc((100%-(0.5rem*5))/6)]">
                                    <a data-exec="Color" data-color="rgb(19, 78, 74)"
                                        style="background: rgb(19, 78, 74)" href="javascript:void(0)"
                                        class="w-full rounded-md aspect-[4/3] block outline-offset-1 hover:outline-4 focus-within:outline hover:outline-x-black focus-within:outline-x-black">
                                    </a>
                                </li>
                                <li class="w-[calc((100%-(0.5rem*5))/6)]">
                                    <a data-exec="Color" data-color="rgb(17, 94, 89)"
                                        style="background: rgb(17, 94, 89)" href="javascript:void(0)"
                                        class="w-full rounded-md aspect-[4/3] block outline-offset-1 hover:outline-4 focus-within:outline hover:outline-x-black focus-within:outline-x-black">
                                    </a>
                                </li>
                                <li class="w-[calc((100%-(0.5rem*5))/6)]">
                                    <a data-exec="Color" data-color="rgb(15, 118, 110)"
                                        style="background: rgb(15, 118, 110)" href="javascript:void(0)"
                                        class="w-full rounded-md aspect-[4/3] block outline-offset-1 hover:outline-4 focus-within:outline hover:outline-x-black focus-within:outline-x-black">
                                    </a>
                                </li>
                                <li class="w-[calc((100%-(0.5rem*5))/6)]">
                                    <a data-exec="Color" data-color="rgb(13, 148, 136)"
                                        style="background: rgb(13, 148, 136)" href="javascript:void(0)"
                                        class="w-full rounded-md aspect-[4/3] block outline-offset-1 hover:outline-4 focus-within:outline hover:outline-x-black focus-within:outline-x-black">
                                    </a>
                                </li>
                                <li class="w-[calc((100%-(0.5rem*5))/6)]">
                                    <a data-exec="Color" data-color="rgb(20, 184, 166)"
                                        style="background: rgb(20, 184, 166)" href="javascript:void(0)"
                                        class="w-full rounded-md aspect-[4/3] block outline-offset-1 hover:outline-4 focus-within:outline hover:outline-x-black focus-within:outline-x-black">
                                    </a>
                                </li>
                                <li class="w-[calc((100%-(0.5rem*5))/6)]">
                                    <a data-exec="Color" data-color="rgb(45, 212, 191)"
                                        style="background: rgb(45, 212, 191)" href="javascript:void(0)"
                                        class="w-full rounded-md aspect-[4/3] block outline-offset-1 hover:outline-4 focus-within:outline hover:outline-x-black focus-within:outline-x-black">
                                    </a>
                                </li>
                                <li class="w-[calc((100%-(0.5rem*5))/6)]">
                                    <a data-exec="Color" data-color="rgb(22, 78, 99)"
                                        style="background: rgb(22, 78, 99)" href="javascript:void(0)"
                                        class="w-full rounded-md aspect-[4/3] block outline-offset-1 hover:outline-4 focus-within:outline hover:outline-x-black focus-within:outline-x-black">
                                    </a>
                                </li>
                                <li class="w-[calc((100%-(0.5rem*5))/6)]">
                                    <a data-exec="Color" data-color="rgb(21, 94, 117)"
                                        style="background: rgb(21, 94, 117)" href="javascript:void(0)"
                                        class="w-full rounded-md aspect-[4/3] block outline-offset-1 hover:outline-4 focus-within:outline hover:outline-x-black focus-within:outline-x-black">
                                    </a>
                                </li>
                                <li class="w-[calc((100%-(0.5rem*5))/6)]">
                                    <a data-exec="Color" data-color="rgb(14, 116, 144)"
                                        style="background: rgb(14, 116, 144)" href="javascript:void(0)"
                                        class="w-full rounded-md aspect-[4/3] block outline-offset-1 hover:outline-4 focus-within:outline hover:outline-x-black focus-within:outline-x-black">
                                    </a>
                                </li>
                                <li class="w-[calc((100%-(0.5rem*5))/6)]">
                                    <a data-exec="Color" data-color="rgb(8, 145, 178)"
                                        style="background: rgb(8, 145, 178)" href="javascript:void(0)"
                                        class="w-full rounded-md aspect-[4/3] block outline-offset-1 hover:outline-4 focus-within:outline hover:outline-x-black focus-within:outline-x-black">
                                    </a>
                                </li>
                                <li class="w-[calc((100%-(0.5rem*5))/6)]">
                                    <a data-exec="Color" data-color="rgb(6, 182, 212)"
                                        style="background: rgb(6, 182, 212)" href="javascript:void(0)"
                                        class="w-full rounded-md aspect-[4/3] block outline-offset-1 hover:outline-4 focus-within:outline hover:outline-x-black focus-within:outline-x-black">
                                    </a>
                                </li>
                                <li class="w-[calc((100%-(0.5rem*5))/6)]">
                                    <a data-exec="Color" data-color="rgb(34, 211, 238)"
                                        style="background: rgb(34, 211, 238)" href="javascript:void(0)"
                                        class="w-full rounded-md aspect-[4/3] block outline-offset-1 hover:outline-4 focus-within:outline hover:outline-x-black focus-within:outline-x-black">
                                    </a>
                                </li>
                                <li class="w-[calc((100%-(0.5rem*5))/6)]">
                                    <a data-exec="Color" data-color="rgb(12, 74, 110)"
                                        style="background: rgb(12, 74, 110)" href="javascript:void(0)"
                                        class="w-full rounded-md aspect-[4/3] block outline-offset-1 hover:outline-4 focus-within:outline hover:outline-x-black focus-within:outline-x-black">
                                    </a>
                                </li>
                                <li class="w-[calc((100%-(0.5rem*5))/6)]">
                                    <a data-exec="Color" data-color="rgb(7, 89, 133)"
                                        style="background: rgb(7, 89, 133)" href="javascript:void(0)"
                                        class="w-full rounded-md aspect-[4/3] block outline-offset-1 hover:outline-4 focus-within:outline hover:outline-x-black focus-within:outline-x-black">
                                    </a>
                                </li>
                                <li class="w-[calc((100%-(0.5rem*5))/6)]">
                                    <a data-exec="Color" data-color="rgb(3, 105, 161)"
                                        style="background: rgb(3, 105, 161)" href="javascript:void(0)"
                                        class="w-full rounded-md aspect-[4/3] block outline-offset-1 hover:outline-4 focus-within:outline hover:outline-x-black focus-within:outline-x-black">
                                    </a>
                                </li>
                                <li class="w-[calc((100%-(0.5rem*5))/6)]">
                                    <a data-exec="Color" data-color="rgb(2, 132, 199)"
                                        style="background: rgb(2, 132, 199)" href="javascript:void(0)"
                                        class="w-full rounded-md aspect-[4/3] block outline-offset-1 hover:outline-4 focus-within:outline hover:outline-x-black focus-within:outline-x-black">
                                    </a>
                                </li>
                                <li class="w-[calc((100%-(0.5rem*5))/6)]">
                                    <a data-exec="Color" data-color="rgb(14, 165, 233)"
                                        style="background: rgb(14, 165, 233)" href="javascript:void(0)"
                                        class="w-full rounded-md aspect-[4/3] block outline-offset-1 hover:outline-4 focus-within:outline hover:outline-x-black focus-within:outline-x-black">
                                    </a>
                                </li>
                                <li class="w-[calc((100%-(0.5rem*5))/6)]">
                                    <a data-exec="Color" data-color="rgb(56, 189, 248)"
                                        style="background: rgb(56, 189, 248)" href="javascript:void(0)"
                                        class="w-full rounded-md aspect-[4/3] block outline-offset-1 hover:outline-4 focus-within:outline hover:outline-x-black focus-within:outline-x-black">
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-max flex gap-[2px] lg:ms-auto rounded-x-core overflow-hidden">
                <button data-exec="Undo"
                    class="flex gap-2 items-center justify-center font-x-core text-sm rounded-sm bg-[#3788d8] text-x-white relative p-2 lg:px-4 h-[36px] lg:h-[42px] aspect-square lg:aspect-auto outline-none hover:!text-x-black hover:bg-x-acent focus-within:!text-x-black focus-within:bg-x-acent rtl:-scale-x-100">
                    <svg class="block w-4 h-4 lg:w-5 lg:h-5 pointer-events-none" fill="currentcolor"
                        viewBox="0 -960 960 960">
                        <path
                            d="M314-179q-18.6 0-31.8-13.2T269-224q0-20 13.2-33t31.8-13h269q62.462 0 104.731-43.429Q730-356.857 730-419q0-60-42.269-104.5T583-568H313l68 68q12 14.578 12 32.789Q393-449 380-436q-13 14-31.356 14-18.355 0-32.644-14L171-580q-5.909-6.167-9.955-14.794Q157-603.422 157-612.711q0-9.289 4.045-18.239Q165.091-639.9 171-645l146-146q12.8-12 31.4-12.5 18.6-.5 32.6 13.929 13 13.428 12.5 31.477Q393-740.044 381-726l-68 67h269q99.479 0 169.739 70Q822-519 822-419.5 822-319 751.739-249 681.479-179 582-179H314Z" />
                    </svg>
                </button>
                <button data-exec="Reset"
                    class="flex gap-2 items-center justify-center font-x-core text-sm rounded-sm bg-[#3788d8] text-x-white relative p-2 lg:px-4 h-[36px] lg:h-[42px] aspect-square lg:aspect-auto outline-none hover:!text-x-black hover:bg-x-acent focus-within:!text-x-black focus-within:bg-x-acent">
                    <svg class="block w-4 h-4 lg:w-5 lg:h-5 pointer-events-none" fill="currentcolor"
                        viewBox="0 -960 960 960">
                        <path
                            d="M400-109q-114-26-188-117t-74-212q0-68 27.5-129T245-671q10-15 30-14.5t35 13.5q11 12 11.5 29.5T308-611q-37 34-58 78.5T229-438q0 87 52.5 153.5T417-200q15 5 25.5 18t10.5 28q0 25-17 37.5t-36 7.5Zm164 0q-21 7-37.5-7T510-153q0-13 10-27.5t26-19.5q83-18 134.5-84.5T732-438q0-100-68-172t-168-78h-23l42 42q8 10 8 25t-8 24q-10 9-25.5 9t-24.5-9L355-706q-6-6-10-14.5t-4-17.5q0-10 4-18t10-14l110-112q9-8 24.5-7.5T515-882q7 10 7 26t-7 24l-53 52h24q140 0 239 100.5T824-438q0 120-74 212T564-109Z" />
                    </svg>
                </button>
                <button data-exec="Redo"
                    class="flex gap-2 items-center justify-center font-x-core text-sm rounded-sm bg-[#3788d8] text-x-white relative p-2 lg:px-4 h-[36px] lg:h-[42px] aspect-square lg:aspect-auto outline-none hover:!text-x-black hover:bg-x-acent focus-within:!text-x-black focus-within:bg-x-acent rtl:-scale-x-100">
                    <svg class="block w-4 h-4 lg:w-5 lg:h-5 pointer-events-none" fill="currentcolor"
                        viewBox="0 -960 960 960">
                        <path
                            d="M648-568H377q-62.231 0-104.615 44Q230-480 230-419q0 62 42.385 105.5Q314.769-270 377-270h269q18.6 0 32.3 13 13.7 13 13.7 32.5T678.3-192q-13.7 13-32.3 13H378.155Q278-179 208.5-248.5T139-419q0-99 69.644-169.5T378-659h270l-68-67q-13-14.044-13.5-32.022Q566-776 580-790q12.8-14 31.4-13.5Q630-803 644-791l145 146q6 5 10.5 13.909T804-613q0 9.545-4.5 18.273Q795-586 789-580L644-436q-14.289 14-32.644 14Q593-422 580-436.5q-13-12.5-13-30.478T580-500l68-68Z" />
                    </svg>
                </button>
            </div>
            <div class="w-max flex gap-[2px] rounded-x-core overflow-hidden">
                @if (!request('iframe'))
                    <button data-exec="Full"
                        class="flex gap-2 items-center justify-center font-x-core text-sm rounded-sm bg-[#3788d8] text-x-white relative p-2 lg:px-4 h-[36px] lg:h-[42px] aspect-square lg:aspect-auto outline-none hover:!text-x-black hover:bg-x-acent focus-within:!text-x-black focus-within:bg-x-acent">
                        <svg class="block w-4 h-4 lg:w-5 lg:h-5 pointer-events-none" fill="currentcolor"
                            viewBox="0 -960 960 960">
                            <path
                                d="M190-190h97q20.175 0 33.588 12.991Q334-164.018 334-144.509 334-124 320.588-111.5 307.175-99 287-99H145q-20.75 0-33.375-12.625T99-145v-142q0-20.175 12.86-33.588Q124.719-334 144.93-334q19.21 0 32.14 13.412Q190-307.175 190-287v97Zm581 0v-97q0-20.175 12.658-33.588Q796.316-334 816.14-334q18.825 0 32.342 13.412Q862-307.175 862-287v142q0 20.75-13.175 33.375T816-99H674.38q-21.68 0-34.53-12.86Q627-124.719 627-144.93q0-19.21 13.125-32.14T674-190h97ZM190-771v97q0 21.3-12.991 34.15-12.991 12.85-32.5 12.85Q124-627 111.5-640.125T99-674.38V-816q0-19.65 12.625-32.825Q124.25-862 145-862h142q20.175 0 33.588 13.468Q334-835.064 334-815.807q0 19.832-13.412 32.32Q307.175-771 287-771h-97Zm581 0h-97q-21.3 0-34.15-12.658Q627-796.316 627-816.14q0-18.825 13.125-32.342Q653.25-862 674.38-862H816q19.65 0 32.825 13.175Q862-835.65 862-816v141.62q0 21.68-13.468 34.53Q835.064-627 815.807-627q-19.832 0-32.32-13.125Q771-653.25 771-674v-97Z" />
                            <path class="hidden"
                                d="M242-242h-98q-18.9 0-31.95-13.358T99-287.14q0-19.825 12.625-33.342Q124.25-334 145-334h143q18.25 0 32.125 13.875T334-288v144q0 18.9-13.468 31.95T287.307-99q-19.332 0-32.319-12.625Q242-124.25 242-145v-97Zm478 0v98q0 18.9-12.991 31.95T673.509-99Q653-99 640-111.625T627-145v-143q0-18.25 13.325-32.125T674.38-334H816q18.775 0 32.387 13.468Q862-307.064 862-287.307q0 19.332-13.613 32.319Q834.775-242 816-242h-96ZM242-720v-96q0-18.775 13.358-32.387Q268.716-862 287.14-862q19.825 0 33.342 13.613Q334-834.775 334-816v141.62q0 20.73-13.875 34.055T288-627H144q-18.9 0-31.95-13.56Q99-654.119 99-673.43q0-20.71 12.625-33.64T145-720h97Zm478 0h96q18.775 0 32.387 12.991Q862-694.018 862-673.509T848.387-640Q834.775-627 816-627H674.38q-20.73 0-34.055-13.325T627-674.38V-816q0-18.775 13.56-32.387Q654.119-862 673.43-862q20.71 0 33.64 13.613Q720-834.775 720-816v96Z" />
                        </svg>
                    </button>
                @endif
                <button data-exec="Download"
                    class="flex gap-2 items-center justify-center font-x-core text-sm rounded-sm bg-[#3788d8] text-x-white relative p-2 lg:px-4 h-[36px] lg:h-[42px] aspect-square lg:aspect-auto outline-none hover:!text-x-black hover:bg-x-acent focus-within:!text-x-black focus-within:bg-x-acent">
                    <svg class="block w-4 h-4 lg:w-5 lg:h-5 pointer-events-none" fill="currentcolor"
                        viewBox="0 -960 960 960">
                        <path
                            d="M480.256-342q-8.399 0-17.849-3.773Q452.957-349.545 447-356L288-516q-14-12.364-13.708-31.208.291-18.844 14.317-32.363Q301.4-593.154 321-592.577 340.6-592 354-579l81 81v-278q0-19.65 12.86-32.825Q460.719-822 480.36-822 500-822 513-808.825T526-776v278l82-81q12.667-13 30.748-13.657 18.082-.657 32.411 12.577Q684-567 684-547.682q0 19.318-13 33.682L513-356q-5.81 6.455-15.221 10.227Q488.368-342 480.256-342ZM230-139q-37.175 0-64.087-26.913Q139-192.825 139-230v-98q0-18.375 12.86-31.688Q164.719-373 184.36-373 204-373 217-359.688q13 13.313 13 31.688v98h500v-98q0-18.375 13.56-31.688Q757.119-373 775.772-373q20.053 0 33.14 13.312Q822-346.375 822-328v98q0 37.175-27.206 64.087Q767.588-139 730-139H230Z" />
                    </svg>
                </button>


                @if (request('iframe'))
                    <a href="{{ url()->current() }}" target="_blank"
                        class="flex gap-2 items-center justify-center font-x-core text-sm rounded-sm bg-[#3788d8] text-x-white relative p-2 lg:px-4 h-[36px] lg:h-[42px] aspect-square lg:aspect-auto outline-none hover:!text-x-black hover:bg-x-acent focus-within:!text-x-black focus-within:bg-x-acent">
                        <svg class="block w-4 h-4 lg:w-5 lg:h-5 pointer-events-none" fill="currentcolor"
                            viewBox="0 -960 960 960">
                            <path
                                d="M190-99q-37.175 0-64.088-26.912Q99-152.825 99-190v-580q0-37.588 26.912-64.794Q152.825-862 190-862h267v92H190v580h580v-267h92v267q0 37.175-27.206 64.088Q807.588-99 770-99H190Zm216-243-63-64 364-364H517v-92h345v345h-92v-189L406-342Z" />
                        </svg>
                    </a>
                @endif
            </div>
        </div>
        <div class="w-full flex-1 overflow-hidden">
            <div id="graph" class="w-full h-full relative"></div>
        </div>
    </div>
    <script>
        function callback() {
            window.app.loadURLs({!! json_encode($data) !!});
        }
    </script>
    <script src="{{ asset('js/viewer.js') }}?v=0.2"></script>
    <script src="{{ asset('js/extra.js') }}?v=0.2"></script>

</body>

</html>
