const net = require('net');
const client = new net.Socket();

client.connect(2999, '127.0.0.1', () => {
	console.log('Connected');
	client.write('##,imei:359586015829802,A;');

	setInterval(() => {
		client.write('359586015829802');
	}, 180000);

	setInterval(() => {
		client.write('imei:353451044508750,001,0809231929,13554900601,F,055403.000,A,2233.1870,N,11354.3067,E,0.00,30.1,65.43,1,0,10.5%,0.0%,28;');
	}, 30000);
});

client.on('data', (data) => {
	console.log('Received: ' + data);
	//client.destroy(); // kill client after server's response
});

client.on('close', () => {
	console.log('Connection closed');
});