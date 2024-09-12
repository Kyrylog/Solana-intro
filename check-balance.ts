import { Connection, clusterApiUrl, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import { resolve } from "@bonfida/spl-name-service"; 
const suppliedPublicKey = process.argv[2];
if (!suppliedPublicKey) {
 throw new Error("Provide a public key to check the balance of!");
}
const publicKey = new PublicKey(suppliedPublicKey);

if(!PublicKey.isOnCurve(publicKey)){
  throw new Error("Public key not on curve!")
}

//const connection = new Connection("https://api.mainnet.solana.com", "confirmed");

const connection = new Connection(clusterApiUrl("mainnet-beta"));

const balanceInLamports = await connection.getBalance(publicKey);
 
const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

console.log(
  `✅ Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`,
);

//const toly = '86xCnPeV69n6t3DnyGvkKobf9FdN2H9oiVDdaMpo2MMY'


const toly = await resolve(connection, "toly");
console.log((toly.toBase58()));
const shaq = await resolve(connection, "shaq");
console.log(shaq.toBase58());
const mccann = await resolve(connection, "mccann");
console.log(mccann.toBase58());

// I'm not interested in balances of those people
