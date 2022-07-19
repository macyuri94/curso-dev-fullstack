window.onload = function () {
    document.getElementById("download-button")
        .addEventListener("click", () => {
            const curriculum = this.document.getElementById("curriculum");
            console.log(curriculum);
            console.log(window);
            var opt = {
                margin: 0.5,
                filename: 'curriculum-vitae.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().from(curriculum).set(opt).save();
        })
}