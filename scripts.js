function throwError() {
    prompt("what is the problem?")
    alert("Problem submitted");

}
let textArea = document.getElementById("randomJokes");
let btnRegen = document.getElementById("jokesRandom");
let btnR = document.getElementById("btnR");
let btnS = document.getElementById("btnS");


const jokes = [
    "The Talking Dog: A man sees a sign in front of a house: 'Talking Dog for Sale.' He rings the bell and the owner tells him the dog is in the backyard. The man walks into the backyard and asks the dog, 'Can you talk?' 'Yep,' the dog replies. 'So, what's your story?' The dog looks up and says, 'Well, I discovered I could talk when I was young. I wanted to help others, so I told the CIA. They used me to eavesdrop on world leaders. I was their top agent for years. But the job was too stressful, so I retired and now I live here.' The man is amazed and asks the owner how much he wants for the dog. The owner says, 'Ten dollars.' The man exclaims, 'Ten dollars? This dog is amazing! Why so cheap?' The owner replies, 'Because he's a liar. He didn't do any of that.'",

    "The Genie and the Accountant: An accountant walks along a beach and stumbles upon a genie lamp. He rubs it, and out pops a genie. The genie says, 'You have freed me from my lamp. For this, I will grant you three wishes, but with a twist. For every wish you make, every other accountant in the world will receive double of what you ask for.' The accountant thinks for a moment and says, 'Okay, my first wish is for a billion dollars.' The genie grants the wish, and instantly every accountant in the world receives two billion dollars. The accountant thinks again and says, 'For my second wish, I want a luxurious mansion.' The genie grants the wish, and every other accountant in the world receives two luxurious mansions. The accountant is satisfied but then pauses before making his third wish. He finally says, 'For my third wish, I want you to scare me half to death.'",

    "The Farmer's Pig: A farmer walks into a bar with a pig with three legs. The bartender asks, 'Why does that pig have only three legs?' The farmer responds, 'Let me tell you, this is one special pig. One night, our house caught fire. This pig ran upstairs, woke everyone up, and saved our lives.' The bartender is impressed and says, 'Wow, that's amazing! But why does it only have three legs?' The farmer continues, 'Another time, I fell into a well. This pig ran and got help, and they pulled me out. It saved my life again!' The bartender, now very curious, asks again, 'That's incredible, but why does it have only three legs?' The farmer looks at the bartender and says, 'Well, when you have a pig this special, you don't eat it all at once.'",

    "The Chicken's Vacation: A chicken walks into a library, goes up to the librarian, and says, 'Book, book, book.' The librarian hands the chicken three books. The chicken takes them and leaves. The next day, the chicken returns, says the same thing, and the librarian gives it three more books. Curious, the librarian decides to follow the chicken. The chicken goes to a pond and shows the books to a frog. The frog looks at each book and says, 'Read it, read it, read it.'",

    "The Forgetful Professor: A professor was known for his absent-mindedness. One day, his wife asked him to write down the directions to their new house, as he often got lost. He agreed, but being his absent-minded self, he lost the directions on the way home. After hours of wandering, he finally saw a young girl. He asked her for directions, explaining that he had moved to a new house but couldn't remember where. The girl looked at him and said, 'Daddy, Mom told me you would get lost again. Come, I'll take you home.'",

    "The Magic Frog: A man is hiking in the woods and finds a magic frog. The frog says, 'I'm a magic frog. If you kiss me, I'll turn into a beautiful princess.' The man picks up the frog and puts it in his pocket. The frog says, 'Hey, didn't you hear me? I said I'd turn into a beautiful princess if you kiss me!' The man replies, 'Nah, at my age, I'd rather have a talking frog.'"
];




btnRegen.addEventListener("click", () => {
    btnRegen.innerHTML = "Regenerate";
    let random = Math.floor(Math.random() * jokes.length);
    textArea.innerHTML = jokes[random];
    btnS.click();
});


