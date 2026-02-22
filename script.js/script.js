let interviewList = [];
let rejectedList = [];

let availableJobs = document.getElementById("available-jobs");
let total = document.getElementById("totalCount");
let interview = document.getElementById("interviewCount");
let rejected = document.getElementById("rejectedCount");

const allJobsBtn = document.getElementById('all-jobs-btn');
const interviewJobsBtn = document.getElementById('interview-jobs-btn');
const rejectedJobsBtn = document.getElementById('rejected-jobs-btn');

const allCardSection = document.getElementById("all-cards");
const mainContainer = document.querySelector('main');
const interviewSection = document.getElementById("interview-card")


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
    selected.classList.remove('bg-white', 'text-black');
    selected.classList.add('bg-blue-500', 'text-white');

    if (id == 'interview-jobs-btn') {
        allCardSection.classList.add('hidden')
        interviewSection.classList.remove('hidden')
    }
    if(id =='all-jobs-btn')(
        allCardSection.classList.remove('hidden')
    )

}


mainContainer.addEventListener("click", function (event) {
    // console.log(event.target)
    // console.log(event.target.classList.contains('interview-btn'))
    if (event.target.classList.contains('interview-btn')) {
        const parentNode = event.target.parentNode.parentNode;
        const jobCompany = parentNode.querySelector(".job-company").innerText;
        const jobtitle = parentNode.querySelector(".job-title").innerText;
        const jobType = parentNode.querySelector(".Job-Types").innerText;
        const deletBtn = parentNode.querySelector(".delete-btn").innerText;
        const status = parentNode.querySelector(".status").innerText;
        const notes = parentNode.querySelector(".notes").innerText;

        const cardInfo = {
            jobCompany,
            jobtitle,
            jobType,
            deletBtn,
            status,
            notes

        }
        const jobCompanyExist = interviewList.find(item => item.jobCompany == cardInfo.jobCompany);
        const statusElement = parentNode.querySelector(".status")
        statusElement.innerText = 'INTERVIEW';
        statusElement.classList.add('text-green-500')

        if (!jobCompanyExist) {
            interviewList.push(cardInfo)
        }

        renderingInterview()

    }


})


function renderingInterview() {
    interviewSection.innerHTML = '';
    for (let interview of interviewList) {
        console.log(interview)
        let div = document.createElement('div')
        div.innerHTML = `  <div class="card my-8 space-y-3 bg-white p-6 rounded-2xl">
                <h2 class="job-company  font-semibold leading-6 text-lg">Mobile First Corp</h2>
                <div class="flex justify-between">
                    <div>
                        <p class="job-title text-[#64748B]">React Native Developer</p>
                        <p class="Job-Types text-[#64748B]">Remote •Full-time •$130,000 - $175,000</p>
                    </div>
                    <button  class="delete-btn cursor-pointer"><i class="fa-regular fa-trash-can"></i></button>
                </div>
                <p class="status bg-[#EEF4FF] w-[120px] p-2.5">NOT APPLIED</p>
                <p class="notes">Build cross-platform mobile applications using React Native. Work on products used by
                    millions of
                    users worldwide.</p>
                <div class="flex  gap-3">
                    <button 
                        class="interview-btn  text-green-500  border border-green-500 py-3 px-8 rounded-2xl cursor-pointer">INTERVIWE</button>
                    <button 
                        class="text-red-500 border border-red-500  py-3 px-8 rounded-2xl cursor-pointer">REJECTED</button>
                </div>


            </div>
        `
        interviewSection.appendChild(div)
    }

}


