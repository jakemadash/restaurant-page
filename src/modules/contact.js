export default function displayContact() {
    const content = document.getElementById('content');

    // Create page elements
    const header = document.createElement('h1');
    const contact = document.createElement('address');
    const email = document.createElement('a');
    const phone = document.createElement('a');
    const lineBreak = document.createElement('br');

    // Add content to elements
    header.textContent = "Get At Me";
    email.setAttribute('href', 'mailto:brendogfrayfray@mummyboy.biz');
    email.textContent = `brendogfrayfray@mummyboy.biz`;
    phone.setAttribute('href', 'tel:+15554206969');
    phone.textContent = '(555) 420-6969';


    // Add elements to page
    content.append(header, contact);
    contact.append(email, lineBreak, phone);
}
