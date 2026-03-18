// Definisanje promenljivih
const PRODUCT1_NAME = "Blazer"; // Tip: string
const PRODUCT1_PRICE = 9500; // Tip: broj (RSD)
const PRODUCT1_QTY = 1; // Tip: ceo broj
const PRODUCT2_NAME = "Chunky Knit Sweater"; // Tip: string
const PRODUCT2_PRICE = 5500; // Tip: broj (RSD)
const PRODUCT2_QTY = 2; // Tip: ceo broj
const VAT_RATE = 0.2; // Tip: broj (decimalni broj)
const CURRENCY = "RSD"; // Tip: string (ili "USD" ili "EUR")
const USD_PER_EUR = 1.16; // Tip: broj (decimalni broj)
const RAW_COUPON = "SAVE10"; // Tip: string

// Ispisivanje tipova promenljivih
console.log(typeof PRODUCT1_NAME); // string
console.log(typeof PRODUCT1_PRICE); // number
console.log(typeof VAT_RATE); // number


function normalizeCoupon(code) {
    return code.trim().toUpperCase();
}

function validateAndNotify() {
    // Uzima unos sa promo kodom
    const promoCode = document.getElementById("promo-input").value;

    // Normalizuje kod
    const normalizedCode = normalizeCoupon(promoCode);

    // Validacija koda
    if (normalizedCode === RAW_COUPON) {
        alert("Uneti kod je validan.");
    } else {
        alert("Uneti kod nije validan.");
    }
}

// Priključivanje događaja na dugme
document.getElementById("applyDugme").addEventListener("click", validateAndNotify);