import '@babel/polyfill';
import app from './app';

import Socket from './socket';

async function main() {
	const s = await app.listen(app.get('port'));
	
	Socket(s);
	
	console.log('Server on port ', app.get('port'));
}

main();
