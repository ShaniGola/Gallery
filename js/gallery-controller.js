

function renderSpecialties(){
    const specialties = getSpecialties()
    var HTMLmap = specialties.map(speciality => 
    `<div class="col-md-4">
        <span class="fa-stack fa-4x">
            <i class="fa fa-circle fa-stack-2x text-primary"></i>
            <i class="fa ${speciality.faName} fa-stack-1x fa-inverse"></i>
        </span>
        <h4 class="service-heading">${speciality.name}</h4>
        <p class="text-muted">${speciality.desc}</p>
    </div>`
    )
    $("#specialities").html(HTMLmap.join(''))
}

function renderPortfolio(){
    const projects = getProjects()
    var HTMLmap = projects.map(project =>`
        <div class="col-md-4 col-sm-6 portfolio-item equal-height">
            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal-${project.modalName}">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src=${project.imgs[0]} alt="something">
            </a>
            <div class="portfolio-caption">
            <h4>${project.name}</h4>
            <p class="text-muted">${project.title}</p>
          </div>
        </div>`)
    $("#portfolioContainer").html(HTMLmap.join(''))
}
function imgHTML(img){
    var active = getFirstImgs().find(firstImg => firstImg === img) ? " active" : ""
    var imgHTML = `<div class="carousel-item${active}">
                        <img class="d-block w-100" src=${img} alt="">
                    </div>`
    return imgHTML}
function renderModals(){
    const carouselPrefix = 
    `<div class="carousel slide" id="picsCarousel" data-ride="carousel">                      
        <div class="carousel-inner">`
    const carouselSuffix =             
    `</div>
        <a class="carousel-control-prev" href="#picsCarousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#picsCarousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>`
    const projects = getProjects()
    var HTMLmap = projects.map(function(project){
        var imgsHTML = project.imgs.map(img => imgHTML(img))
        var carouselHTML = carouselPrefix + imgsHTML.join("") + carouselSuffix

    var modalHTML =`
    <div class="portfolio-modal modal fade" id="portfolioModal-${project.modalName}" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="close-modal" data-dismiss="modal">
                    <div class="lr">
                        <div class="rl">
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 mx-auto">
                            <div class="modal-body">
                                <h2>${project.name}</h2>
                                <p class="item-intro text-muted">${project.title}</p>
                                ${carouselHTML}
                                <p>${project.desc}</p>
                                <button class="btn btn-primary" data-dismiss="modal" type="button">
                                <i class="fa fa-times"></i>Close Project</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
    return modalHTML})
    $(".modalContainer").html(HTMLmap.join(''))
}

function addEvents(){
    $("#send-btn").on("click", function(){
        var subject = $("#mail-subject").val()
        var content = $("#mail-content").val()
        if((subject.trim() === "") && (content.trim() === "")){
            $("#mail-subject").addClass("is-invalid")
            $("#mail-content").addClass("is-invalid")
            return
        }
        if(subject.trim() === ""){
            $("#mail-subject").addClass("is-invalid")
            return
        }
        if(content.trim() === ""){
            $("#mail-content").addClass("is-invalid")
            return
        }
        $("#mail-subject").removeClass("is-invalid")
        $("#mail-content").removeClass("is-invalid")
        var href = `https://mail.google.com/mail/?view=cm&dfs=1&to=me@example.com&su=${subject}&body=${content}`
        var subject = $("#mail-subject").val("")
        var content = $("#mail-content").val("")
        window.open(href, '_blank');
    })
}
