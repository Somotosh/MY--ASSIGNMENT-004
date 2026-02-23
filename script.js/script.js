let interviewList = [];
let rejectedList = [];
let currentStatus = 'all'

let availableJobs = document.getElementById("available-jobs");
let total = document.getElementById("totalCount");
let interview = document.getElementById("interviewCount");
let rejected = document.getElementById("rejectedCount");

const allJobsBtn = document.getElementById('all-jobs-btn');
const interviewJobsBtn = document.getElementById('interview-jobs-btn');
const rejectedJobsBtn = document.getElementById('rejected-jobs-btn');

const allCardSection = document.getElementById("all-cards");
const mainContainer = document.querySelector('main');
const interviewSection = document.getElementById("interview-card");
const rejectedSection = document.getElementById("rejected-card");
const noJobsSection = document.getElementById("Nojobs")


function calculateCount() {
    total.innerHTML = allCardSection.children.length;
    availableJobs.innerHTML = allCardSection.children.length;

    interview.innerText = interviewList.length;

    rejected.innerText = rejectedList.length
}
calculateCount()


function toggoleStyle(id) {
    allJobsBtn.classList.add('bg-white', 'text-black');
    interviewJobsBtn.classList.add('bg-white', 'text-black');
    rejectedJobsBtn.classList.add('bg-white', 'text-black');

    allJobsBtn.classList.remove('bg-blue-500', 'text-white');
    interviewJobsBtn.classList.remove('bg-blue-500', 'text-white');
    rejectedJobsBtn.classList.remove('bg-blue-500', 'text-white');

    const selected = document.getElementById(id);
    currentStatus = id
    selected.classList.remove('bg-white', 'text-black');
    selected.classList.add('bg-blue-500', 'text-white');

    if (id == 'interview-jobs-btn') {
        allCardSection.classList.add('hidden');
        rejectedSection.classList.add('hidden')
        interviewSection.classList.remove('hidden');
        renderingInterview();
        updateInterviewSection()
       
    }

    else if (id == 'all-jobs-btn') {
        allCardSection.classList.remove('hidden');
        interviewSection.classList.add('hidden');
        rejectedSection.classList.add('hidden');
        noJobsSection.classList.add('hidden');

    }
    else if (id == 'rejected-jobs-btn') {
        allCardSection.classList.add('hidden');
        interviewSection.classList.add('hidden');
        rejectedSection.classList.remove('hidden');

        renderingRejected();
        updateRejectedSection()
   
    }





}


mainContainer.addEventListener("click", function (event) {

    if (event.target.classList.contains('interview-btn')) {
        const parentNode = event.target.parentNode.parentNode;
        const jobCompany = parentNode.querySelector(".job-company").innerText;
        const jobtitle = parentNode.querySelector(".job-title").innerText;
        const jobType = parentNode.querySelector(".Job-Types").innerText;
        const deletBtn = parentNode.querySelector(".delete-card-btn").innerText;
        const status = parentNode.querySelector(".status").innerText;
        const notes = parentNode.querySelector(".notes").innerText;
        const statusElement = parentNode.querySelector(".status")
        statusElement.innerText = 'INTERVIEW';
        statusElement.classList.remove('text-red-500')
        statusElement.classList.add('text-green-500')

        const cardInfo = {
            jobCompany,
            jobtitle,
            jobType,
            deletBtn,
            status: 'INTERVIEW',
            notes

        }
        const jobCompanyExist = interviewList.find(item => item.jobCompany == cardInfo.jobCompany);


        if (!jobCompanyExist) {
            interviewList.push(cardInfo)
        }

        rejectedList = rejectedList.filter(item => item.jobCompany != cardInfo.jobCompany);
        if (currentStatus == 'rejected-jobs-btn') {
            renderingRejected();
            updateRejectedSection();
        }


        calculateCount()
        // renderingInterview()

    } 
    else if (event.target.classList.contains('rejected-btn')) {
        const parentNode = event.target.parentNode.parentNode;
        const jobCompany = parentNode.querySelector(".job-company").innerText;
        const jobtitle = parentNode.querySelector(".job-title").innerText;
        const jobType = parentNode.querySelector(".Job-Types").innerText;
        const deletBtn = parentNode.querySelector(".delete-card-btn").innerText;
        const status = parentNode.querySelector(".status").innerText;
        const notes = parentNode.querySelector(".notes").innerText;
        const statusElement = parentNode.querySelector(".status")
        statusElement.innerText = 'REJECTED';
        statusElement.classList.remove('text-green-500')
        statusElement.classList.add('text-red-500')
        const cardInfo = {
            jobCompany,
            jobtitle,
            jobType,
            deletBtn,
            status: 'REJECTED',
            notes

        }
        const jobCompanyExist = rejectedList.find(item => item.jobCompany == cardInfo.jobCompany);


        if (!jobCompanyExist) {
            rejectedList.push(cardInfo)
        }

        interviewList = interviewList.filter(item => item.jobCompany != cardInfo.jobCompany);
        if (currentStatus == 'interview-jobs-btn') {
            
            renderingInterview();
            updateInterviewSection();
           
        }

        calculateCount();
        // renderingRejected();
    }


})


function renderingInterview() {

    interviewSection.innerHTML = '';
    for (let interview of interviewList) {
        // console.log(interview)
        let div = document.createElement('div')
        div.innerHTML = ` <div class="card my-8 space-y-3 bg-white p-6 rounded-2xl">
                <h2 class="job-company  font-semibold leading-6 text-lg">${interview.jobCompany}</h2>
                <div class="flex justify-between">
                    <div>
                        <p class="job-title text-[#64748B]">${interview.jobtitle}</p>
                        <p class="Job-Types text-[#64748B]">${interview.jobType}</p>
                    </div>
                    <i onclick="deleteCard('delete-card-btn')"
                        class="delete-card-btn fa-regular fa-trash-can cursor-pointer"></i>
                </div>
                <p class="status bg-[#EEF4FF] w-[120px] p-2.5">${interview.status}</p>
                <p class="notes">${interview.notes}</p>
                <div class="flex  gap-3">
                    <button
                        class="interview-btn  text-green-500  border border-green-500 py-3 px-8 rounded-2xl cursor-pointer">INTERVIEW</button>
                    <button
                        class="rejected-btn text-red-500 border border-red-500  py-3 px-8 rounded-2xl cursor-pointer">REJECTED</button>
                </div>


            </div>
        `
        interviewSection.appendChild(div);

    }

}

function renderingRejected() {

    rejectedSection.innerHTML = '';
    for (let rejected of rejectedList) {
        // console.log(interview)
        let div = document.createElement('div')
        div.innerHTML = `  <div class="card my-8 space-y-3 bg-white p-6 rounded-2xl">
                <h2 class="job-company  font-semibold leading-6 text-lg">${rejected.jobCompany}</h2>
                <div class="flex justify-between">
                    <div>
                        <p class="job-title text-[#64748B]">${rejected.jobtitle}</p>
                        <p class="Job-Types text-[#64748B]">${rejected.jobType}</p>
                    </div>
                    <i onclick="deleteCard('delete-card-btn')"
                        class="delete-card-btn fa-regular fa-trash-can cursor-pointer"></i>
                </div>
                <p class="status bg-[#EEF4FF] w-[120px] p-2.5">${rejected.status}</p>
                <p class="notes">${rejected.notes}</p>
                <div class="flex  gap-3">
                    <button
                        class="interview-btn  text-green-500  border border-green-500 py-3 px-8 rounded-2xl cursor-pointer">INTERVIEW</button>
                    <button
                        class="rejected-btn text-red-500 border border-red-500  py-3 px-8 rounded-2xl cursor-pointer">REJECTED</button>
                </div>


            </div>
        `
        rejectedSection.appendChild(div);

    }

}

function deleteCard(className) {
    const elements = document.getElementsByClassName(className);
    const element = elements[0]

    const card = element.parentNode.parentNode;
    card.remove()

    calculateCount()
}

 function updateInterviewSection() {

    if (interviewList.length === 0) {
        interviewSection.innerHTML = `
            <div class="bg-white mt-12 mb-12">
                <div class="text-center space-y-2 py-14 ">
                    <img class="mx-auto" src="./jobs.png" alt="">
                    <h2>No jobs available</h2>
                    <p>Check back soon for new job opportunities</p>
                </div>
            </div>
        `
        
    }
}
 function updateRejectedSection() {

    if (rejectedList.length === 0) {
        rejectedSection.innerHTML = `
            <div class="bg-white mt-12 mb-12">
                <div class="text-center space-y-2 py-14">
                    <img class="mx-auto" src="./jobs.png" alt="">
                    <h2>No jobs available</h2>
                    <p>Check back soon for new job opportunities</p>
                </div>
            </div>
        `
        
    }
}