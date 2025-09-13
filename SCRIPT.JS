// Eternal Tribe Terminal JS

// Replace these with your real links
const LINKS = {
  spark: "https://t.me/yourSparkChat",
  flame: "https://example.com/flame-drop",
  warrior: "https://t.me/yourWarriorChat"
};

// Plug into the buttons
document.getElementById("sparkLink").href = LINKS.spark;
document.getElementById("flameLink").href = LINKS.flame;
document.getElementById("warriorLink").href = LINKS.warrior;

// Simple code unlock system
const codes = {
  "SPARK-001": "sparkChamber",
  "FLAME-001": "flameChamber",
  "WARRIOR-001": "warriorChamber"
};

document.getElementById("codeBtn").addEventListener("click", function() {
  const input = document.getElementById("codeInput").value.trim().toUpperCase();
  const chamberId = codes[input];
  document.getElementById("unlockMessage").textContent = "";

  // hide all chambers
  ["sparkChamber","flameChamber","warriorChamber"].forEach(id => {
    document.getElementById(id).classList.add("hidden");
  });

  if (chamberId) {
    document.getElementById(chamberId).classList.remove("hidden");
    document.getElementById("unlockMessage").textContent = "Access unlocked: " + input;
  } else {
    document.getElementById("unlockMessage").textContent = "Invalid code.";
  }
});
