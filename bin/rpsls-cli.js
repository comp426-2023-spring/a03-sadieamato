#!/usr/bin/env node
import { rpsls } from "../lib/rpsls.js"


let help = `Usage: node-rpsls [SHOT]
Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!

  -h, --help        display this help message and exit
  -r, --rules       display the rules and exit

Examples:
  node-rpsls        Return JSON with single player RPSLS result.
                    e.g. {"player":"rock"}
  node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.
                    e.g {"player":"rock","opponent":"Spock","result":"lose"}`

let rules = `Rules for the Lizard-Spock Espansion of Rock Paper Scissors:

- Scissors CUTS Paper
- Paper COVERS Rock
- Rock SMOOSHES Lizard
- Lizard POISONS Spock
- Spock SMASHES Scissors
- Scissors DECAPITATES Lizard
- Lizard EATS Paper
- Paper DISPROVES Spock
- Spock VAPORIZES Rock
- Rock CRUSHES Scissors`


// Process args and put them into 'args'
let args = minimist(process.argv.slice(2));

// If given the -h or -help option in command line, show help msg and exit 0
if (args.h || args.help) {
    console.log(help);
    process.exit(0);
}

// If given the -r or -rules option in command line, show rules msg and exit 0
if (args.r || args.rules) {
    console.log(rules);
    process.exit(0);
}

// Set shot equal to unlabeled argument
let shot = args._[0]

try {
	console.log(JSON.stringify(rpsls(shot)));
} catch (e) {
    // If error happened in rpsls, log rules and help messages
    console.log(help);
    console.log(rules);
}

