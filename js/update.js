
function update(parsedData) {
    $(document).ready(function () {
    
        /** Modal popup event listener, note that all .card children have pointer-events disabled in the css file to prevent click propagation that would prevent correct handling of data-index attribute.
         */
        $(".card").click(function (e) {
            let cardIndex = $(e.target).attr("data-index");
            
            $("#popup-title").text(parsedData[cardIndex].title);
            $("#popup-details").text(parsedData[cardIndex].details);
            $("#modal-img").attr("src", `./img/${parsedData[cardIndex].img}`);
    
            $("#card-modal").show();
        });


        /** Modal close event listener.
         */
        $(".btn-close").click(function (e) { 
            e.preventDefault();

            $("#card-modal").hide();
        });
    
    });
}

