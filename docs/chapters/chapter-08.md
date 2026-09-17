# Chapter VIII — Estoppel

BSA Chapter VIII is short and self-contained: three sections, ss. 121 to 123. Section 121 states the general rule of estoppel by representation. Sections 122 and 123 apply that same idea to four named relationships — tenant and landlord, licensee and licensor, acceptor and drawer of a bill of exchange, and bailee and bailor — where the law refuses to let one party turn around and deny a fact the relationship itself was built on.

## Section 121 — the general rule of estoppel

### The dispute this solves

::: oneminute
A tells B that a certain plot of land belongs to A, knowing this is false. B believes A, and buys the land from him, paying full price. Years later it turns out the land really does become A's property — perhaps A inherits it, or buys it from the true owner. A now wants to keep the land and the money too: he tries to have the earlier sale to B set aside, arguing that at the time he sold it, he had no title to sell. The law will not let him say this. Having intentionally caused B to believe the land was his and to act on that belief, A cannot now be heard to deny it. This is estoppel — not a rule about who owns the land, but a rule about what A is allowed to argue in court.
:::

::: story
Estoppel is the law's version of "you made your bed, now lie in it." It is not concerned with what is objectively true — A's want of title at the time of sale might well be a fact. It is concerned with fairness in reliance: A caused B to believe something and to act on it, and the law simply closes off A's mouth on that one point, in that one dispute, between those two people. It is, famously, a rule of evidence and not a cause of action in itself — it does not create rights; it stops a person from denying a fact in the teeth of their own earlier conduct.
:::

### The Act, decompiled

> **121.** When one person has, by his declaration, act or omission, [[!intentionally caused or permitted another person to believe a thing to be true and to act upon such belief]], neither he nor his representative [[!shall be allowed]], in any suit or proceeding between himself and such person or his representative, to deny the truth of that thing.
>
> *Illustration.* A intentionally and falsely leads B to believe that certain land belongs to A, and thereby induces B to buy and pay for it. The land afterwards becomes the property of A, and A seeks to set aside the sale on the ground that, at the time of the sale, he had no title. He must not be allowed to prove his want of title.

| Text | What it does | Why it matters |
|---|---|---|
| "declaration, act or omission" | Estoppel can arise from words, from conduct, or from a deliberate silence where speaking was called for — not just from an express statement | A party cannot escape estoppel merely because they never said the words out loud; standing by and letting someone act on a false belief can be enough |
| "intentionally caused or permitted" | Requires that the representor meant the other person to believe the thing, or knowingly let that belief form and take hold | Careless or innocent statements, made without intending reliance, sit outside this section's core — though the [[?belief and act upon such belief]] language still does real work in marginal cases |
| "believe a thing to be true and to act upon such belief" | Two conditions must both be met: an actual belief was formed, and the believer actually changed position because of it | A representation nobody relied on, or one made but never acted upon, does not trigger estoppel — reliance is the hinge of the whole doctrine |
| "neither he nor his representative shall be allowed... to deny the truth of that thing" | The bar binds not only the representor but also anyone claiming through him — heirs, assignees, successors-in-interest | Estoppel survives the representor's death or transfer of interest; a representative cannot inherit a cleaner slate than the person they represent had |
| "in any suit or proceeding between himself and such person" | The bar is relative, not universal — it operates only between the representor (or his representative) and the specific person who relied on the representation (or that person's representative) | Estoppel does not create a truth good against the whole world; a third party who never relied on the representation is free to prove the real facts |

::: proviso The bar is relative to the parties, not a finding of fact for all purposes
Section 121 does not decide what is actually true — it decides who may argue what, against whom. The land in the illustration may genuinely not have been A's to sell; the section does not pretend otherwise. It simply forbids A, and only A (or his representative), from raising that true fact against B (or B's representative), because A is the one who caused the false belief in the first place. Against a stranger to the transaction, the real facts remain open to proof by anyone.
:::

### How this actually runs

<MicroTree
  input="A party in a suit wants to deny the truth of a thing they earlier represented, by declaration, act, or omission"
  :gates="[
    { q: 'Did that party intentionally cause or permit the other party to believe the thing to be true?', no: 'section 121 does not apply — there is no representation of the kind the section requires, and the party remains free to deny the fact' },
    { q: 'Did the other party actually believe it and actually act upon that belief?', no: 'estoppel does not arise — a representation nobody relied on, or acted on, creates no bar' },
    { q: 'Is the present suit or proceeding between the representor (or his representative) and the very person who relied (or that person’s representative)?', no: 'the bar does not extend to this proceeding — estoppel operates only between those two sides, not against or in favour of strangers to the original representation' }
  ]"
  result="the representor and his representative are estopped from denying the truth of the thing represented, in this suit"
  caveat="estoppel only closes off an argument between the two sides to the original representation — it decides nothing about what is objectively true, and does not bind or benefit anyone outside that relationship"
  resultKind="mixed"
/>

### In plain English

**Estoppel is not a rule about truth — it is a rule about consistency.** If you cause someone to believe a thing and to act on that belief, the law will not let you later turn around, in a dispute with that same person, and prove the opposite. It does not matter that the truth might actually favour you now; what matters is that you cannot be permitted to blow hot and cold at the other party's expense.

Three things must all be present: an intentional representation (by word, act, or telling silence), an actual belief formed and acted upon by the other side, and a dispute between the same two parties (or their representatives) that the earlier representation was about. Miss any one of the three, and section 121 simply does not switch on.

### What changed from the Indian Evidence Act

::: info Verify before citing
The mapping stated here — Indian Evidence Act, 1872, s. 115 (estoppel) to BSA s. 121 — is the commonly reported one-to-one correspondence, a flat offset of six sections, consistent with the same offset already seen across several provisions in Chapter VII. No verified local Indian Evidence Act source text exists in `reference/` to check the old section's exact wording against the new one; treat the mapping as a flagged hypothesis until such a source is added.
:::

| Indian Evidence Act (reported) | BSA | What appears to have changed |
|---|---|---|
| S. 115 | S. 121 | Renumbered only, on the reported mapping — the operative text and the illustration appear unchanged in substance |

For a practitioner trained on the old Act, section 121 should read as entirely familiar — same test, same illustration, same three-cornered structure of representation, reliance, and a bar operating only between the original parties. The only discipline that changes is citation hygiene: plead "section 121 of the Bharatiya Sakshya Adhiniyam, 2023," not "section 115 of the Evidence Act," in any matter governed by the new Act.

### Test your instinct

::::instinct Scenario 1 — the false owner who profits twice
A falsely tells B that a shop belongs to A. B buys it and pays A in full. Two years later, A actually acquires title to the same shop from its real owner, and now sues to have the sale to B set aside, arguing that at the time of sale he had no title to give. Can A succeed?
:::ruling
No. This is the section's own illustration, almost word for word. A intentionally and falsely caused B to believe the shop was his, and B bought and paid for it in reliance on that belief. A and his representative are barred from denying, in any suit between them, that the shop belonged to A at the time of sale — whatever the true state of title actually was. A cannot use the truth about his earlier want of title as a sword against the very person he misled.
:::
::::

::::instinct Scenario 2 — the representation nobody acted on
A tells B, in passing conversation, that a piece of machinery in A's yard belongs to A. B never does anything about it — no purchase, no change of position, nothing. Later, in an unrelated dispute between A and B, A denies ever having said the machinery was his. Is A estopped?
:::ruling
No. Estoppel under section 121 requires that the other person not only believed the representation but also acted upon that belief. B did neither — or at least did not act. A stray remark that induced no reliance and caused no change of position creates no estoppel, however clearly it was made. The doctrine exists to protect people who changed their position, not to freeze every casual statement into an unchallengeable admission.
:::
::::

::::instinct Scenario 3 — the innocent third party
A falsely tells B that a plot belongs to A, and B buys it in reliance. Years later, in a wholly separate suit between A and C — a stranger who had nothing to do with the original sale — the question of who actually owned the plot at the relevant time comes up again. Can C rely on section 121 to stop A from proving the truth?
:::ruling
No. Section 121's bar operates only "in any suit or proceeding between himself and such person or his representative" — that is, between A and B (or their representatives). C was never party to the original representation and never relied on it. C cannot borrow B's estoppel as a shortcut to avoid proving the real facts, and A remains perfectly free to prove the truth against C. Estoppel is relative to the parties it was created between, not a general finding of fact good against the world.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio
No single authority is promoted here. The three-condition test — intentional representation, actual belief and reliance, and a proceeding between the same parties — is worked out directly from the section's own text and its own illustration, which is unusually self-explanatory for this doctrine.

#### Sword and shield
| | As a sword (offering estoppel) | As a shield (resisting estoppel) |
|---|---|---|
| Section 121 | Plead and prove the earlier representation, the belief it caused, and the change of position it induced, to shut down the opponent's present denial | Argue that one of the three conditions is missing — no intentional representation, no actual belief or reliance, or that the present dispute is not between the original parties |

#### The limitation clock
None of its own. Estoppel is a rule of evidence invoked within whatever suit or proceeding is otherwise properly before the Court; it carries no independent limitation period distinct from the underlying claim, and does not itself extend or shorten the time within which that claim must be brought.

#### Interlocking matrix
| This provision | Interlocks with | Why |
|---|---|---|
| S. 121 (general estoppel) | Code of Civil Procedure, 1908, and the Transfer of Property Act, 1882 (title and conveyancing disputes) | Estoppel by representation is most often pleaded in exactly this kind of dispute — a sale or transfer where one party's later denial of title is the very question in issue; the doctrine is evidentiary, but the disputes it resolves are almost always property and contract suits governed by those two statutes |

There is no Bharatiya Nyaya Sanhita, 2023 or Bharatiya Nagarik Suraksha Sanhita, 2023 touchpoint for this section — estoppel under section 121 operates in civil suits and proceedings, not in the machinery of criminal prosecution, and honesty about that absence is preferable to manufacturing one.

#### The authorities
No confidently recalled leading authority is promoted for this section with the certainty this project's citation rule requires; the doctrine that estoppel is a rule of evidence and creates no cause of action of its own is well settled in Indian jurisprudence, but no specific citation for it is held with sufficient confidence to state here.

#### Strategy and drafting
Plead all three elements of estoppel expressly and separately in the pleading — the representation, the belief and the change of position it caused, and the identity of the parties as the same ones between whom the representation ran. A pleading that simply asserts "the defendant is estopped" without particularising each element invites a straightforward reply that the doctrine's conditions are not made out. Remember also that estoppel is a shield to stop an opponent's denial, not a sword that itself proves your underlying claim — it must be pleaded alongside, not instead of, the substantive case.

## Sections 122 and 123 — estoppel of tenant, licensee, acceptor and bailee

### The dispute this solves

::: oneminute
A tenant has been paying rent to a landlord for years. When the landlord sues to recover possession at the end of the tenancy, the tenant suddenly claims the landlord never really owned the property at all, and so had no right to let it out — and therefore no right to take it back either. The law will not let the tenant say this, at least not in this form: having entered into and continued the tenancy on the footing of the landlord's title, the tenant cannot now deny that title existed when the tenancy began. The same idea extends to a person let onto land by someone in possession of it (a licensee), to the acceptor of a bill of exchange who cannot deny the drawer's authority to draw it, and to a bailee who cannot deny the bailor's authority to bail the goods — each is a relationship built on an assumed authority, and the law holds the dependent party to that assumption once they have taken the benefit of it.
:::

::: story
These two sections apply section 121's general idea to four specific relationships that recur constantly in practice: tenancy, licence, negotiable instruments, and bailment. In each, one party's position exists only because they accepted another party's authority — to let out the property, to permit entry, to draw the bill, to hand over the goods for safekeeping. Having taken the benefit of that assumed authority, the dependent party cannot then turn around, within that same relationship, and deny the very authority they built their position on. Each estoppel also comes with its own carefully drawn edge — the tenant can still show the landlord's title has since ended; the acceptor can still deny genuineness of the drawer's signature; the bailee can still prove a third party's superior right.
:::

### The Act, decompiled

> **122.** No tenant of immovable property, or person claiming through such tenant, shall, during the continuance of the tenancy or any time thereafter, [[!be permitted to deny that the landlord of such tenant had, at the beginning of the tenancy, a title to such immovable property]]; and no person who came upon any immovable property by the licence of the person in possession thereof [[!shall be permitted to deny that such person had a title to such possession]] at the time when such licence was given.
>
> **123.** No acceptor of a bill of exchange shall be permitted to deny that the drawer had authority to draw such bill or to endorse it; nor shall any bailee or licensee [[!be permitted to deny that his bailor or licensor had, at the time when the bailment or licence commenced, authority to make such bailment or grant such licence]].
>
> *Explanation 1.* — The acceptor of a bill of exchange [[?may deny that the bill was really drawn by the person by whom it purports to have been drawn]].
>
> *Explanation 2.* — If a bailee delivers the goods bailed to a person other than the bailor, he [[?may prove that such person had a right to them as against the bailor]].

| Text | What it does | Why it matters |
|---|---|---|
| S. 122, first limb (tenant) | Bars a tenant, or anyone claiming through the tenant, from denying the landlord's title *as it stood at the beginning of the tenancy* — during the tenancy or at any time after | The bar is fixed to the start of the relationship; it says nothing about title at any later time, which is exactly where the section's own edge lies |
| S. 122, second limb (licensee of possession) | Extends the same idea to anyone who came onto immovable property by the licence of the person in possession — that person cannot deny the licensor's title to that possession, as it stood when the licence was given | Mirrors the tenant rule for a broader, less formal category of entrant — one who came in merely by permission, not under a lease |
| S. 123, first limb (acceptor of a bill) | Bars an acceptor from denying the drawer's authority to draw or endorse the bill | Protects the negotiability of bills of exchange — a person who accepts a bill cannot later unwind that acceptance by disputing the drawer's authority |
| S. 123, second limb (bailee/licensee of goods or grant) | Bars a bailee or licensee from denying that the bailor or licensor had, at the time the bailment or licence began, authority to make it | The same fixed-point-in-time structure as section 122 — authority is assessed at the moment the relationship commenced |
| Explanation 1 | Lets the acceptor still deny that the bill was genuinely drawn by the person it purports to be drawn by | A forged signature is not "the drawer's authority" at all — it is a question of genuineness, which sits outside what section 123 protects |
| Explanation 2 | Lets a bailee who delivered the goods to someone other than the bailor prove that recipient's superior right against the bailor | The bailee's estoppel protects the bailor's assumed authority to bail, not an absolute title in the bailor good against everyone; a true owner's claim can still be proved |

::: proviso Both estoppels are pinned to a moment, not frozen for all time
Neither section 122 nor section 123 says the landlord's, licensor's, or bailor's title can never afterwards be challenged at all — each estoppel is pinned to a specific moment: the beginning of the tenancy or licence, or the commencement of the bailment. A tenant who can show the landlord's title has since come to an end — by forfeiture, by the landlord's own transfer, by operation of law — is not barred from proving *that* fact; what remains barred is denying the title existed at the outset.
:::

::: proviso Genuineness is not the same question as authority
Explanation 1 draws a sharp line for negotiable instruments: authority to draw or endorse a bill is one question, and whether the signature is genuine at all is a separate one. Section 123 forecloses only the first question for an acceptor. An acceptor who suspects forgery is not silenced by this section — that specific defence remains open.
:::

### How this actually runs

<MicroTree
  input="A tenant, licensee of possession, acceptor of a bill, or bailee/licensee of goods wants to deny the other side's title or authority"
  :gates="[
    { q: 'Is the party trying to deny title or authority as it stood at the very start of the relationship — the beginning of the tenancy or licence, or the commencement of the bailment or bill?', no: 'sections 122 and 123 do not reach this — a claim that the title or authority has since ended, or changed after the relationship began, is not barred by these sections' },
    { q: 'For an acceptor specifically: is the denial actually a claim that the bill was forged, i.e. not genuinely drawn by the person it purports to be drawn by?', no: 'skip this exception and move to the next question' },
    { q: 'Is the denial that specific genuineness claim (forgery), rather than a denial of the drawer’s authority to draw a genuine bill?', yes: 'Explanation 1 permits it — genuineness is outside what section 123 protects' },
    { q: 'For a bailee specifically: has the bailee delivered the goods to someone other than the bailor, and does the bailee now want to prove that recipient’s superior right?', yes: 'Explanation 2 permits it — the bailee may prove the third party’s right against the bailor' }
  ]"
  result="the tenant, licensee, acceptor, or bailee is estopped from denying the other side's title or authority at the start of the relationship"
  caveat="both sections protect title or authority only as it stood when the relationship began — a later-arising challenge, a forgery defence under Explanation 1, or a third-party-right defence under Explanation 2, are each carved out rather than barred"
  resultKind="mixed"
/>

### In plain English

**These two sections take section 121's basic idea — you cannot deny what you have taken the benefit of — and pin it to four named relationships.** A tenant who has enjoyed the property cannot deny the landlord had title when the tenancy began; a licensee who came onto land by permission cannot deny the licensor's possession-title when the licence was given; an acceptor who has taken on liability under a bill cannot deny the drawer's authority to draw it; a bailee entrusted with goods cannot deny the bailor's authority to bail them.

Each estoppel has a matching edge that keeps it honest. It only bites at the *start* of the relationship — later changes in title are fair game. The acceptor keeps a genuineness defence intact (forgery is not the same as lack of authority). And the bailee keeps the door open to prove that someone else, not the bailor, actually owned the goods all along.

### What changed from the Indian Evidence Act

::: info Verify before citing
The mapping stated here — Indian Evidence Act, 1872, s. 116 (estoppel of tenant, and of licensee of person in possession) to BSA s. 122, and s. 117 (estoppel of acceptor, bailee, or licensee) to BSA s. 123, with its two Explanations carried over as Explanations 1 and 2 — is the commonly reported one-to-one correspondence, continuing the same six-section offset already noted for s. 121 above. No verified local Indian Evidence Act source text exists in `reference/` to check the old sections' exact wording against the new ones; treat the mapping as a flagged hypothesis until such a source is added.
:::

| Indian Evidence Act (reported) | BSA | What appears to have changed |
|---|---|---|
| S. 116 | S. 122 | Renumbered only, on the reported mapping — the tenant and licensee-of-possession estoppels appear unchanged in substance |
| S. 117 | S. 123 | Renumbered only, on the reported mapping — the acceptor and bailee/licensee estoppels, together with both Explanations, appear unchanged in substance |

For a practitioner trained on the old Act, ss. 122 and 123 should feel entirely familiar in substance — same four relationships, same fixed-point-in-time structure, same two Explanations preserving the genuineness and third-party-right defences. As with section 121, the only discipline that changes is citation hygiene.

### Test your instinct

::::instinct Scenario 4 — the tenant who denies the landlord ever owned the building
A tenant occupies a shop for eight years, paying rent throughout. When the landlord finally sues for possession after the tenancy ends, the tenant defends by arguing the landlord never actually owned the building at all — a stranger did, at the time the tenancy began. Can the tenant raise this defence?
:::ruling
No. Section 122 squarely bars a tenant, during the tenancy or at any time after, from denying that the landlord had title to the property at the beginning of the tenancy. Having taken the tenancy and enjoyed it for eight years, the tenant cannot now use a claimed defect in the landlord's original title as a shield against a possession suit. If the tenant genuinely believed the landlord had no title, the time to test that was before entering into the tenancy, not after eight years of paying rent under it.
:::
::::

::::instinct Scenario 5 — the landlord whose title has since actually ended
A tenant defends a possession suit by showing that the landlord, after letting out the property, transferred all his interest in it to a third party — so that whatever title the landlord had at the start of the tenancy no longer exists in him now. Is this defence barred by section 122?
:::ruling
No. Section 122 only estops the tenant from denying that the landlord had title *at the beginning of the tenancy* — it says nothing about title at any later point. A tenant who accepts the landlord had title when the tenancy began, but shows that title has since passed to someone else, is not denying the fact section 122 protects at all. This is exactly the pinned-to-a-moment structure the section is built on, and the tenant's defence survives it.
:::
::::

::::instinct Scenario 6 — the acceptor who suspects a forged signature
The acceptor of a bill of exchange refuses to honour it, arguing that the signature purporting to be the drawer's was actually forged by someone else entirely — the real drawer named on the bill never signed anything. The payee argues section 123 stops the acceptor from denying the drawer's authority. Who is right?
:::ruling
The acceptor. Explanation 1 to section 123 expressly preserves the acceptor's right to deny that the bill was really drawn by the person it purports to have been drawn by — that is a claim about genuineness, not about authority to draw a genuine bill. Section 123 forecloses only the second question. A forgery defence is precisely the kind of claim Explanation 1 keeps open, and the payee's argument collapses the two questions the Explanation is careful to keep apart.
:::
::::

::::instinct Scenario 7 — the bailee caught between two claimants
A bailee holds goods on behalf of a bailor, but before returning them, a third party proves to the bailee's satisfaction that the goods were stolen from the third party and never rightfully belonged to the bailor at all. The bailee delivers the goods to the third party instead. When the bailor sues the bailee for conversion, the bailee wants to justify the delivery by proving the third party's superior right. Can the bailee do this, given that section 123 generally bars a bailee from denying the bailor's authority?
:::ruling
Yes. Explanation 2 to section 123 exists for exactly this situation: where a bailee delivers the goods to a person other than the bailor, the bailee may prove that recipient had a right to the goods as against the bailor. The general estoppel in section 123 protects the bailor's *authority to make the bailment*, not an unchallengeable title good against a genuine true owner — Explanation 2 keeps that distinction intact, and the bailee's defence is not barred.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio
No single authority is promoted here. The fixed-point-in-time structure of both sections, and the two Explanations' carve-outs for genuineness and third-party right, are worked out directly from the sections' own text, which is detailed and self-limiting enough that no specific leading judgment is recalled with the certainty this project's citation rule requires.

#### Sword and shield
| | As a sword (offering estoppel) | As a shield (resisting estoppel) |
|---|---|---|
| S. 122 (tenant/licensee of possession) | A landlord or licensor suing for possession can shut down a tenant's or licensee's denial of title-at-inception without separately proving title all over again | A tenant or licensee should look for a title-has-since-changed defence, which section 122 leaves entirely open, rather than attacking title at the outset |
| S. 123, first limb (acceptor) | A payee or holder can rely on the acceptor's estoppel to avoid re-litigating the drawer's authority at every stage of a bill's negotiation | An acceptor with a genuine forgery concern should plead it expressly as a denial of genuineness under Explanation 1, not as a denial of authority, or risk the objection being misread as barred |
| S. 123, second limb (bailee/licensee of goods) | A bailor suing for return of goods or for conversion can rely on the bailee's inability to deny the bailor's authority to bail them | A bailee facing competing claimants should establish the third party's right clearly before delivering the goods, so that Explanation 2 is available as a complete answer rather than an afterthought |

#### The limitation clock
None of its own. As with section 121, these are rules of evidence operating within whatever suit is otherwise properly before the Court — a possession suit, a suit on a bill of exchange, or a suit for conversion — each carrying its own limitation period under the Limitation Act, 1963, entirely independent of the estoppel itself.

#### Interlocking matrix
| This provision | Interlocks with | Why |
|---|---|---|
| S. 122 (tenant/licensee) | Transfer of Property Act, 1882 (leases and licences) | The tenancy and licence relationships these sections estop a party from denying are themselves created and governed by that Act; the estoppel operates on top of, not instead of, that substantive framework |
| S. 123, first limb (acceptor) | Negotiable Instruments Act, 1881 (bills of exchange, acceptance, endorsement) | The estoppel exists to protect the commercial reliability of negotiable instruments defined and governed entirely by that Act |
| S. 123, second limb (bailee) | Indian Contract Act, 1872 (bailment) | Bailment as a relationship — its creation, the bailee's duties, and the bailor's authority to create it — is defined by that Act; section 123 supplies the evidentiary bar that makes the relationship dependable in practice |

As with section 121, there is no Bharatiya Nyaya Sanhita, 2023 or Bharatiya Nagarik Suraksha Sanhita, 2023 touchpoint here — these are civil-relationship estoppels, not criminal-procedure ones.

#### The authorities
No confidently recalled leading authority is promoted for either section with the certainty this project's citation rule requires.

#### Strategy and drafting
When defending a tenant or licensee, always ask first whether the real defence is "title never existed" (barred by section 122) or "title has since ended" (not barred at all) — conflating the two is a common and entirely avoidable drafting error. When acting for an acceptor with doubts about a bill, plead the defence precisely as one of genuineness under Explanation 1, using language like forged or not really drawn by the named drawer, rather than language that reads as a denial of authority, which invites an immediate estoppel objection. When acting for a bailee facing a competing claim to bailed goods, secure and document proof of the third party's superior right before delivering the goods to them — Explanation 2 is a complete defence only if that proof can actually be produced later, not merely asserted.

## Chapter VIII consolidation — has the right party been stopped from denying the right thing?

1. **Was there an intentional representation — by declaration, act, or omission — under section 121, or one of the four named relationships under sections 122 and 123?** Without one of these, there is nothing to estop.
2. **Did the other side actually believe it and actually act upon that belief, or actually enter into the tenancy, licence, acceptance, or bailment on the strength of it?** Reliance, not just a statement, is what triggers the bar.
3. **Is the denial now being made about the position as it stood at the relevant fixed point — the original representation under s. 121, or the start of the tenancy, licence, or bailment under ss. 122–123 — rather than about some later change?** A later change in title or authority is never barred by these sections.
4. **Does one of the two express carve-outs apply — genuineness under Explanation 1, or a third party's superior right under Explanation 2?** If so, the estoppel yields to the carve-out; neither section is as absolute as its opening words suggest.

This closes Phase 7 of the roadmap. Chapter IX, on witnesses — competency, privileged communications, and examination — is next.
