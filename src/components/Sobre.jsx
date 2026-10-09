import React from 'react'

const Sobre = () => {
    return (
        <main className="min-h-screen bg-[#FCF6BD] p-8 text-center text-gray-700">
            <section className="mx-auto max-w-4xl rounded-3xl bg-white/70 p-10 shadow-md transition duration-300 hover:shadow-xl">
                <h1 className="text-4xl font-bold text-[#FF99C8] transition hover:scale-105">
                    Sobre nossa loja 🧸
                </h1>
                <p className="mx-auto mt-5 max-w-2xl leading-7">Acreditamos que brincar é descobrir, imaginar e aprender. Oferecemos brinquedos que transformam cada momento em uma lembrança especial!</p>
                <div className="mt-8 flex flex-wrap justify-center gap-4 text-5xl">
                    {['🧸', '🪁', '🧩', '🚀'].map((item, i) => (
                        <span key={i} className="inline-block cursor-pointer transition duration-300 hover:scale-125 hover:-rotate-12">{item}</span>
                    ))}
                </div>
            </section>
            <section className="mx-auto mt-8 grid max-w-4xl gap-4 md:grid-cols-3">
                <article className="rounded-2xl bg-[#FF99C8] p-6 transition duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-lg">
                    <h2 className="text-xl font-bold">🎨 Imaginação</h2>
                    <p className="mt-2">Criatividade para inventar novas histórias.</p>
                </article>
                <article className="rounded-2xl bg-[#D0F4DE] p-6 transition duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-lg">
                    <h2 className="text-xl font-bold">🧠 Aprendizado</h2>
                    <p className="mt-2">Descobertas divertidas a cada brincadeira.</p>
                </article>
                <article className="rounded-2xl bg-[#E4C1F9] p-6 transition duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-lg">
                    <h2 className="text-xl font-bold">💖 Felicidade</h2>
                    <p className="mt-2">Momentos especiais para toda a família.</p>
                </article>
            </section>
            <footer className="mt-8 rounded-2xl bg-[#A9DEF9] p-6 transition duration-300 hover:shadow-xl">
                <h2 className="text-2xl font-bold">Vamos brincar? 🌈</h2>
                <p className="mt-2">A diversão espera por você!</p>
                <button className="mt-4 rounded-full bg-[#FF99C8] px-6 py-3 font-bold transition duration-300 hover:scale-110 hover:bg-[#E4C1F9] active:scale-95">Explorar 🧸</button>
            </footer>
        </main>
    )
}

export default Sobre