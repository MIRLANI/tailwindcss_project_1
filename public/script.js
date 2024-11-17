// absolute     

// Ambil elemen yang dibutuhkan
const menu = document.querySelector(".menu");
const hamburgerMenu = document.querySelector(".hamburger-menu"); // Perbaiki nama class sesuai HTML Anda
const iconBars = document.querySelector(".fa-bars");
const iconClose = document.querySelector(".fa-xmark");

// Tambahkan event listener hanya pada hamburgerMenu
hamburgerMenu.addEventListener('click', toggleMenu);

function toggleMenu() {
    // Toggle kelas `hidden` untuk menu
    const isVisible = menu.classList.toggle("hidden");

    // Tambahkan atau hapus kelas terkait menu
    menu.classList.toggle("absolute", !isVisible);
    menu.classList.toggle("top-14", !isVisible);
    menu.classList.toggle("w-full", !isVisible);
    menu.classList.toggle("left-0", !isVisible);
    menu.classList.toggle("bg-slate-800", !isVisible);
    menu.classList.toggle("divide-gray-900", !isVisible);
    menu.classList.toggle("divide-y-2", !isVisible);

    // Tampilkan ikon yang sesuai
    iconBars.style.display = isVisible ? "inline" : "none";
    iconClose.style.display = isVisible ? "none" : "inline";
}
