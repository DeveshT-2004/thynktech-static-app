// 🔐 PASTE YOUR AI STUDIO KEY HERE
const GEMINI_API_KEY = "AIzaSyCWeVCJw4aYym_g7iBrm6m52HornOFnsqc";

// 🎯 Use the available Gemini model

const GEMINI_MODEL = "gemini-3-flash-preview";
const GEMINI_URL =
  `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;


// ===============================
// ENTER SITE
// ===============================
function enterSite() {
    document.getElementById('welcome').style.animation =
        'fadeIn 0.8s ease-out reverse';

    setTimeout(() => {
        document.getElementById('welcome').classList.add('hidden');
        document.getElementById('main').classList.remove('hidden');
        animateCards();
    }, 800);
}


// ===============================
// CARD ANIMATION
// ===============================
function animateCards() {
    document.querySelectorAll('.flip-card').forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
}


// ===============================
// 🤖 AI SEARCH FUNCTION
// ===============================
async function handleAISearch() {
    const input = document.getElementById('searchInput');
    const query = input.value.trim();
    if (!query) return;

    showLoading();

    try {
        const response = await fetch(
            `${GEMINI_URL}?key=${GEMINI_API_KEY}`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: `
You are a professional Ai assistant answer only to technology related questions.
Respond in exactly 3–4 complete sentences.
Do not stop mid-sentence.

Be clear and professional.

Question:
${query}
`
                        }]
                    }],
                    generationConfig: {
                        temperature: 0.3,
                        topP: 0.9,
                        maxOutputTokens: 500
                    }
                })
            }
        );

        if (!response.ok) {
            const errorJson = await response.json();
            throw new Error(errorJson.error?.message || "AI API error");
        }

        const data = await response.json();
        let aiText =
            data.candidates?.[0]?.content?.parts?.[0]?.text ||
            "No response received.";

       aiText = aiText.trim();

// If it does not end properly, cut back to last full stop
if (!/[.!?]$/.test(aiText)) {
    const lastPeriod = aiText.lastIndexOf(".");
    if (lastPeriod !== -1) {
        aiText = aiText.substring(0, lastPeriod + 1);
    }
}

let sentences = aiText.split(/(?<=[.!?])\s+/);
sentences = sentences.slice(0, 4);
aiText = sentences.join(" ");

        displayAIResponse(aiText);

    } catch (error) {
        displayAIResponse("❌ " + error.message, true);
    }
}


// ===============================
// LOADING UI
// ===============================
function showLoading() {
    const aiResponse = document.getElementById('aiResponse');
    aiResponse.innerHTML =
        '<div class="loading">🤖 AI is generating response...</div>';
    aiResponse.classList.remove('hidden', 'error-msg');
}


// ===============================
// DISPLAY RESPONSE
// ===============================
function displayAIResponse(text, isError = false) {
    const aiResponse = document.getElementById('aiResponse');

    aiResponse.innerHTML = `
        <h4>🤖 AI Response:</h4>
        <p id="typingText"></p>
    `;

    aiResponse.classList.toggle('error-msg', isError);
    aiResponse.classList.remove('hidden');

    typeText(text);
}


function typeText(text) {
    const element = document.getElementById("typingText");
    let index = 0;
    const speed = 20; // smaller = faster

    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, speed);
        } else {
            // ✅ Stop blinking when done
            element.classList.remove("typing-cursor");
        }
    }

    type();
}


// ===============================
// FILTER CARDS
// ===============================
function filterCards(query = '') {
    document.querySelectorAll('.flip-card').forEach(card => {
        const techName = card.getAttribute('data-tech');
        const matches = techName.includes(query.toLowerCase()) || query === '';
        card.style.display = matches ? 'block' : 'none';
    });
}


// ===============================
// EVENT LISTENERS
// ===============================
document.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('.flip-card').forEach(card => {
        card.addEventListener('click', () =>
            card.classList.toggle('flipped')
        );
    });

    document.getElementById('searchInput')
        .addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleAISearch();
            }
        });
});


document.addEventListener('click', (e) => {
    if (!e.target.closest('.flip-card') &&
        !e.target.closest('.search-filter')) {
        document.querySelectorAll('.flip-card.flipped')
            .forEach(card => card.classList.remove('flipped'));
    }
});