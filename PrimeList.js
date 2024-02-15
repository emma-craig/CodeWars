const primeList = (top) => {
  // use sieve of Eratosthenes https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
  let prime = Array.from({ length: top + 1 }, (_, i) => true);

  for (p = 2; p * p <= top; p++) {
    if (prime[p] == true) {
      // Update all multiples of p
      for (i = p * p; i <= top; i += p) prime[i] = false;
    }
  }
  let arr = [];
  // Print all prime numbers
  for (i = 2; i <= top; i++) {
    if (prime[i] == true) arr.push(i);
  }
  return arr;
};

// or
const result = [],
  primes = Array(n + 1).fill(1);
for (let x = 2, y = Math.sqrt(n); x <= y; ++x)
  if (primes[x]) for (let i = x ** 2; i <= n; i += x) primes[i] = 0;
for (let i = 2; i <= n; primes[i] && result.push(i), ++i);
return result;
