// Function to open WhatsApp for order
function openWhatsApp() {
    // Replace with your actual WhatsApp Business number
    const phoneNumber = '+1234567890';
    const message = 'Hello, I would like to place an order for 3D printing services.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}