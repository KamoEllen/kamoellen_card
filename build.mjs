// Pull in our modules
import chalk from 'chalk';
import boxen from 'boxen';
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Define options for Boxen
const options = {
	padding: 1,
	margin: 1,
	borderStyle: 'round',
};

// Text + chalk definitions
const data = {
	name: chalk.white('           KamoEllen'),
	handle: chalk.white('kamoellen'),
	shorthandle: chalk.white('k.e.k'),
	work: chalk.white('FullStack Developer(::)'),
	twitter: chalk.gray('https://twitter.com/') + chalk.cyan('kamogeloellenk'),
	behance: chalk.gray('https://www.behance.net/') + chalk.magenta('kamoellenkganakga'),
	npm: chalk.gray('https://npmjs.com/') + chalk.red('kamoellen'),
	github: chalk.gray('https://github.com/') + chalk.green('kamoellen'),
	linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('kamogelokganakga'),
	web: chalk.cyan('https://kamo.website'),
	npx: `${chalk.red('npx')} ${chalk.white('kamoellen')}`,
	labelWork: chalk.white.bold('    Work:'),
	labelTwitter: chalk.white.bold(' Twitter:'),
	labelbehance: chalk.white.bold('behance:'),
	labelnpm: chalk.white.bold('     npm:'),
	labelGitHub: chalk.white.bold('  GitHub:'),
	labelLinkedIn: chalk.white.bold('LinkedIn:'),
	labelWeb: chalk.white.bold('     Web:'),
	labelCard: chalk.white.bold('    Card:'),
};

// Actual strings we're going to output
const newline = '\n';
const heading = `${data.name} / ${data.handle} / ${data.shorthandle}`;
const working = `${data.labelWork}  ${data.work}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const behanceing = `${data.labelbehance}  ${data.behance}`;
const npming = `${data.labelnpm}  ${data.npm}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const webing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output =
	heading + data.name + data.handle
	newline +
	newline + // Add one whole blank line
	working +
	newline +  data.labelWork + data.work
	twittering +
	newline + data.labelTwitter + data.twitter
	behanceing +
	newline + data.labelTwitter + data.twitter
	npming +
	newline + data.labelnpm + data.npm
	githubing +
	newline + data.labelGitHub + data.github
	linkedining +
	newline + data.labelLinkedIn + data.linkedin
	webing +
	newline +
	newline + data.labelWeb + data.web
	carding; data.labelCard + data.npx

writeFileSync(
	join(import.meta.dirname, 'bin/output'),
	chalk.green(boxen(output, options)),
);
