# Chapter VII part II — Burden of Proof: specific statutory presumptions (ss. 115-120)

Part I of this chapter (`chapter-07a.md`, ss. 104-114) built the general theory of burden of proof. Part II turns to a different animal: a run of specific, named presumptions the Act itself creates for particular fact patterns — disturbed-area offences (s. 115), legitimacy (s. 116), abetment of a married woman's suicide (s. 117), dowry death (s. 118), the court's general discretion to presume facts from ordinary human experience (s. 119), and absence of consent in certain rape prosecutions (s. 120). Section 119, in particular, is the natural place to fix the taxonomy that runs through this entire chapter — "may presume," "shall presume," and "conclusive proof" are three different things, and confusing them is one of the most consistently made errors in the whole subject.

## Section 115 — presumption as to certain offences in disturbed areas

### The dispute this solves

::: oneminute
In a declared disturbed area, or an area with over a month of extensive public-peace disturbance, a person is shown to have been present at a place where firearms or explosives were used against armed or public-order forces. Section 115 says: unless the contrary is shown, that person is presumed to have committed the specified public-order offence himself — the presence, plus the attack from that place, is enough to trigger the presumption.
:::

::: story
This is a security-legislation-style presumption, narrow and fact-specific by design: it does not presume guilt of ordinary crime from ordinary presence anywhere, only guilt of a short, named list of public-order offences, from presence at a very specific place, at the very moment force was used from that place, in an area already declared or shown to be disturbed.
:::

### The Act, decompiled

> **115.** (1) Where a person is accused of having committed any offence specified in sub-section (2), in—
>
> (a) any area declared to be a disturbed area under any enactment for the time being in force, making provision for the suppression of disorder and restoration and maintenance of public order; or
>
> (b) any area in which there has been, over a period of more than one month, extensive disturbance of the public peace,
>
> and it is shown that such person had been at a place in such area at a time when firearms or explosives were used at or from that place to attack or resist the members of any armed forces or the forces charged with the maintenance of public order acting in the discharge of their duties, it [[!shall be presumed]], unless the contrary is shown, that such person had committed such offence.
>
> (2) The offences referred to in sub-section (1) are the following, namely:—
>
> (a) an offence under section 147, section 148, section 149 or section 150 of the Bharatiya Nyaya Sanhita, 2023;
>
> (b) criminal conspiracy or attempt to commit, or abetment of, an offence under section 149 or section 150 of the Bharatiya Nyaya Sanhita, 2023.

| Text | What it does | Why it matters |
|---|---|---|
| S. 115(1) | Presumes, unless the contrary is shown, that a person present where firearms or explosives were used against armed or public-order forces in a disturbed area committed the offence in question | A rebuttable "shall presume" — the presumption is mandatory once the triggering facts are shown, but the accused may still displace it with contrary evidence |
| S. 115(2) | Restricts the presumption to a closed list of specified public-order offences under the Bharatiya Nyaya Sanhita, 2023, and to conspiracy, attempt, or abetment of two of them | Keeps the presumption narrow and offence-specific rather than a general presumption of criminality from mere presence in a disturbed area |

::: proviso The presumption is rebuttable, and the triggering facts must all be shown first
Section 115's presumption only arises once every triggering fact is independently shown: the declared or shown-disturbed character of the area, the person's presence at the specific place, and the use of firearms or explosives at or from that place against the specified forces at that time. Even then, the presumption is expressly "unless the contrary is shown" — it is not a conclusive proof, and an accused who leads contrary evidence is entitled to have that evidence weighed, not disregarded because the presumption exists.
:::

### How this actually runs

<MicroTree
  input="A person is accused of a public-order offence allegedly connected to a disturbed area"
  :gates="[
    { q: 'Is the area either formally declared disturbed under an in-force enactment, or shown to have had over a month of extensive public-peace disturbance?', no: 'section 115’s presumption does not arise on these facts' },
    { q: 'Is it shown that the accused was at a place in that area at a time when firearms or explosives were used at or from that place against armed or public-order forces?', no: 'the presumption does not arise; ordinary proof requirements for the offence apply without it' },
    { q: 'Is the offence charged one of the specified offences (BNS ss. 147-150) or conspiracy, attempt, or abetment of the two named among them?', no: 'section 115 does not extend the presumption to a different offence, even on otherwise similar facts' },
    { q: 'Has the accused led evidence displacing the presumption once it has arisen?', no: 'the presumption stands, and the accused is taken to have committed the offence unless and until such contrary evidence is led and accepted' }
  ]"
  result="once the disturbed-area, presence, and weapon-use facts are all shown for one of the specified offences, the accused is presumed to have committed it, subject to being displaced by contrary evidence"
  caveat="the presumption never extends beyond the closed list of specified offences, and remains rebuttable throughout"
  resultKind="mandatory"
/>

### In plain English

**Being caught at the wrong place, at the wrong moment, in a declared trouble zone, shifts the burden onto you — but only for a short, named list of offences, and only until you show otherwise.** Section 115 is a narrow security-context presumption: prosecutors do not have to independently prove the accused fired the shot or planted the explosive; showing presence at the place, at the time force was used from it, against the right kind of forces, in a genuinely disturbed area, is enough to trigger a presumption of guilt of the named offences. But "unless the contrary is shown" means the accused always retains a real opportunity to displace it with actual evidence — an alibi, an innocent reason for presence, or evidence the area or timing does not actually meet the section's conditions.

### What changed from the Indian Evidence Act

::: info Verify before citing
The mapping stated here — Indian Evidence Act, 1872, s. 111A to BSA s. 115 — is offered as the commonly reported correspondence; the old section is understood to have been a lettered insertion (s. 111A) rather than an originally-numbered section, which is consistent with this being folded into the chapter's otherwise sequential "+3" renumbering. The old section's cross-references were to the Indian Penal Code, 1860's specified offences (understood to include unlawful assembly and rioting provisions); the BSA text instead cross-refers to the Bharatiya Nyaya Sanhita, 2023's equivalent sections 147-150. No verified local Indian Evidence Act or Indian Penal Code source text exists in `reference/` to confirm either the old section's exact wording or the precise old-to-new offence-section correspondence; treat both mappings as flagged hypotheses until verified sources are added.
:::

| Indian Evidence Act (reported) | BSA | What appears to have changed |
|---|---|---|
| S. 111A | S. 115 | Renumbered out of its lettered form into the BSA's sequential numbering, with its specified-offence cross-references updated from the Indian Penal Code, 1860 to the Bharatiya Nyaya Sanhita, 2023 — the presumption's structure and rebuttable character appear unchanged in substance |

For a practitioner trained on the old Act, the analytical test itself should feel unchanged; the essential due-diligence step is confirming that BNS ss. 147-150 are in fact the correct successor provisions for the offences the old section listed, before relying on the cross-reference in a live matter.

### Test your instinct

::::instinct Scenario 1 — presence with an innocent explanation
An area is formally declared disturbed. A is shown to have been at a specific spot in that area at the exact time gunfire was directed from that spot at police personnel. A testifies, with independent corroboration, that he was in fact walking home from work through that spot purely by coincidence and had no connection to the firing. Does section 115's presumption survive?
:::ruling
Not necessarily — this is exactly what "unless the contrary is shown" protects against becoming an irrebuttable trap. The presumption arises once the triggering facts (declared area, presence, weapon use from that place at that time) are shown, but A is entitled to lead contrary evidence, and if that evidence — corroborated, and going to an innocent explanation for presence — is accepted by the court, the presumption is displaced. Section 115 shifts the evidentiary burden; it does not conclusively fix guilt regardless of what the accused proves.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio
No single authority is promoted here. This is a narrow, security-context provision with limited case law confidently recalled at this time; any authority relied on in a live matter should be independently verified before citing.

#### Sword and shield
| | As a sword (prosecution) | As a shield (accused) |
|---|---|---|
| S. 115 | Prove the declared or shown-disturbed character of the area, the accused's presence at the place, and the weapon use from that place at that time, then rest on the presumption for the named offences | Lead affirmative, ideally corroborated, contrary evidence at the earliest opportunity — an unexplained presence is far more dangerous under this section than under an ordinary criminal charge |

#### The limitation clock
None of its own. The presumption operates at trial once the triggering facts are shown; there is no separate procedural deadline attached to invoking or displacing it.

#### Interlocking matrix
| This provision | Interlocks with | Why |
|---|---|---|
| S. 115(2) | Bharatiya Nyaya Sanhita, 2023, ss. 147-150 | Direct cross-reference — section 115 only creates the presumption; the substantive offences it presumes are defined entirely in the BNS. |

#### The authorities
No confidently recalled leading authority is promoted for this section.

#### Strategy and drafting
For the defence, do not treat "unless the contrary is shown" as a formality — lead concrete, corroborated evidence of an innocent explanation for presence as early as possible, since an evidentiary vacuum here is unusually costly given the presumption's mandatory character. For the prosecution, prove each triggering fact (the area's disturbed status, the specific place, the specific time, the specific forces attacked) independently and precisely; a presumption built on loosely proved triggering facts is vulnerable to challenge on appeal.

## Section 116 — birth during marriage as conclusive proof of legitimacy

### The dispute this solves

::: oneminute
A child is born during a valid marriage, or within two hundred and eighty days after the marriage ends, with the mother remaining unmarried in the meantime. Section 116 says that fact is conclusive proof the child is the legitimate child of the mother's husband — the strongest kind of presumption the Act creates — unless it can be shown the spouses had no access to each other at any time when the child could have been conceived.
:::

::: story
"Conclusive proof" is deliberately the strongest tool in the Act's presumption toolbox: once the birth-during-marriage (or within-280-days) fact is shown, the court is not permitted to weigh competing evidence of paternity at large. The only door left open is the narrow one the section itself names — proof of no access at any possible time of conception — and nothing less will do.
:::

### The Act, decompiled

> **116.** The fact that any person was born during the continuance of a valid marriage between his mother and any man, or within two hundred and eighty days after its dissolution, the mother remaining unmarried, [[!shall be conclusive proof]] that he is the legitimate child of that man, unless it can be shown that the parties to the marriage had no access to each other at any time when he could have been begotten.

| Text | What it does | Why it matters |
|---|---|---|
| S. 116 | Treats birth during a valid marriage, or within 280 days of its dissolution with the mother unmarried, as [[=conclusive proof]] of legitimacy, defeasible only by proof of non-access at any possible time of conception | This is the Act's strongest presumption category — "conclusive proof" forecloses the court from weighing contrary evidence of paternity generally; only non-access at every possible conception window can displace it |

::: proviso Only non-access defeats the presumption — nothing less
Evidence that makes paternity merely doubtful, or even evidence pointing to another man as the more probable father, does not defeat section 116's presumption once birth during marriage (or the 280-day window) is shown. The single, narrow escape the section itself provides is proof that the spouses had no access to each other at any time when conception could have occurred — anything short of that leaves the conclusive presumption standing.
:::

### How this actually runs

<MicroTree
  input="A child’s legitimacy is disputed"
  :gates="[
    { q: 'Was the child born during the continuance of a valid marriage between the mother and a man, or within two hundred and eighty days after its dissolution with the mother remaining unmarried?', no: 'section 116’s conclusive-proof presumption does not arise on these facts at all' },
    { q: 'Is there proof that the spouses had no access to each other at any time when the child could have been begotten?', no: 'the presumption of legitimacy is conclusive; no other evidence of paternity, however strong, may be weighed against it' }
  ]"
  result="birth during marriage, or within 280 days of its dissolution with the mother unmarried, conclusively proves legitimacy unless non-access at every possible time of conception is shown"
  caveat="doubt about paternity, or even evidence favouring another man as father, does not by itself defeat the presumption — only proof of non-access at every possible conception window does"
  resultKind="mandatory"
/>

### In plain English

**Marriage plus birth timing beats almost everything else — except proof the couple never had the chance to conceive the child at all.** This is the strongest presumption in the whole Act. A court faced with a birth during a valid marriage, or shortly after its end, is not free to hold a general inquiry into "who is probably the biological father" — it is bound to treat legitimacy as conclusively proved unless the very narrow non-access door is opened. Modern science complicates this in practice — DNA evidence can speak to biological paternity directly — but the section's own text draws the line at non-access, not at biological proof at large, and courts have historically guarded that line carefully rather than letting DNA evidence become a routine substitute for it.

### What changed from the Indian Evidence Act

::: info Verify before citing
The mapping stated here — Indian Evidence Act, 1872, s. 112 to BSA s. 116 — is offered as the commonly reported correspondence, consistent with this chapter's roughly uniform "+3" renumbering (accounting for the lettered s. 111A folding into s. 115). No verified local Indian Evidence Act source text exists in `reference/` to confirm the old section's exact wording; treat this mapping as a flagged hypothesis until a verified source is added.
:::

| Indian Evidence Act (reported) | BSA | What appears to have changed |
|---|---|---|
| S. 112 | S. 116 | Renumbered, on the reported mapping — the conclusive-proof-of-legitimacy rule and its sole non-access escape appear unchanged in substance |

For a practitioner trained on the old Act, this section should be immediately recognisable, including the significance of the phrase "conclusive proof" as distinct from the lighter "may presume" and "shall presume" standards discussed under section 119 below — the extensive body of case law interpreting the old section's non-access requirement and its interaction with DNA evidence remains the natural starting point for argument, subject to independent verification of each citation before use.

### Test your instinct

::::instinct Scenario 1 — DNA evidence pointing elsewhere
H and W are validly married and living together. A child is born to W during the marriage. H later obtains a DNA test showing, with high scientific confidence, that he is not the biological father, but does not show that he had no access to W at any possible time of conception. Does the DNA evidence defeat the section 116 presumption?
:::ruling
Not on these facts as stated. Section 116's presumption is defeated only by proof of non-access at any time when the child could have been begotten — a DNA result addressing biological paternity directly does not, by itself, prove non-access, and courts have been notably reluctant to let biological evidence override the conclusive-proof standard without the non-access foundation the section itself demands. This is precisely the kind of scenario where a sympathetic-seeming, scientifically strong claim can still fail because it does not fit the one gateway the statute actually provides.
:::
::::

::::instinct Scenario 2 — the 280-day window after divorce
H and W divorce. W remains unmarried and gives birth 250 days after the divorce is finalised. H denies paternity generally, without any evidence of non-access. Is the child conclusively presumed legitimate?
:::ruling
Yes. The birth falls within the two-hundred-and-eighty-day window after the marriage's dissolution, and W remained unmarried in the interim — both conditions section 116 requires are met. Absent proof of non-access at any possible conception time, H's general denial does not defeat the presumption; the child is conclusively presumed his legitimate child.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio
*Goutam Kundu v. State of West Bengal*, (1993) 3 SCC 418 — facts: a dispute over whether a court could direct a DNA blood-grouping test to determine a child's paternity where the mother and child were seeking maintenance. **Ratio decidendi:** courts cannot order a DNA or blood test as a matter of course to resolve paternity disputes; the presumption of legitimacy arising from a subsisting marriage is a strong, conclusive-category presumption that can be displaced only by strong, cogent evidence of non-access, and such a test should not be directed merely to enable a party to escape the presumption without first laying that foundation. **Practitioner takeaway:** "A DNA test cannot be used as a shortcut around section 116 — my opponent must first make out a real case of non-access before any court will disturb the conclusive presumption of legitimacy."

#### Sword and shield
| | As a sword (asserting legitimacy) | As a shield (denying legitimacy) |
|---|---|---|
| S. 116 | Establish the marriage's validity and the birth's timing, then rest on the conclusive presumption without needing further proof of paternity | Lead specific, cogent evidence of non-access at every possible time of conception — not general doubt, and not biological evidence alone |

#### The limitation clock
None of its own. Legitimacy disputes typically arise incidentally within maintenance, succession, or matrimonial proceedings, each carrying its own separate timelines.

#### Interlocking matrix
| This provision | Interlocks with | Why |
|---|---|---|
| S. 116 | Ch. II part V, ss. 39-45 (`chapter-02e.md`) | Not a debt, but worth flagging: where scientific or medical evidence (such as DNA analysis) is tendered to address non-access or paternity, the expert-opinion admissibility rules already treated there govern how that evidence is led, even though section 116 itself governs whether it can defeat the presumption at all. |

#### The authorities
No further authority is promoted beyond the winning ratio above.

#### Strategy and drafting
When resisting a legitimacy claim, plead and lead non-access specifically and from the outset — vague suggestions of infidelity or bare requests for a DNA test, without a pleaded non-access foundation, are unlikely to succeed and risk inviting exactly the rebuke in *Goutam Kundu*. When defending legitimacy, resist any DNA test application that is not preceded by a genuine, particularised non-access case, and press the conclusive-proof character of section 116 as a threshold bar to speculative scientific fishing expeditions.

## Sections 117 and 118 — presumptions in cruelty-linked deaths

### The dispute this solves

::: oneminute
Two closely related presumptions address deaths connected to cruelty within a marriage. Section 117: if a married woman commits suicide within seven years of her marriage, and it is shown her husband or his relative subjected her to cruelty, the court *may* presume that person abetted the suicide. Section 118: if a woman's death is in question as a dowry death, and it is shown that shortly before her death she was subjected to cruelty or harassment for a dowry demand, the court *shall* presume that person caused the dowry death.
:::

::: story
Both sections respond to the same practical reality — that abuse inside a marriage is often invisible to outsiders and that requiring a prosecution to independently prove abetment or causation from scratch, without any assistance from the proved pattern of cruelty, would make these offences nearly unprosecutable. But the two sections are deliberately pitched at different strengths — one discretionary, one mandatory — and that difference is not an accident.
:::

### The Act, decompiled

> **117.** When the question is whether the commission of suicide by a woman had been abetted by her husband or any relative of her husband and it is shown that she had committed suicide within a period of seven years from the date of her marriage and that her husband or such relative of her husband had subjected her to cruelty, the Court [[?may presume]], having regard to all the other circumstances of the case, that such suicide had been abetted by her husband or by such relative of her husband.
>
> Explanation.—For the purposes of this section, "cruelty" shall have the same meaning as in section 86 of the Bharatiya Nyaya Sanhita, 2023.
>
> **118.** When the question is whether a person has committed the dowry death of a woman and it is shown that soon before her death, such woman had been subjected by such person to cruelty or harassment for, or in connection with, any demand for dowry, the Court [[!shall presume]] that such person had caused the dowry death.
>
> Explanation.—For the purposes of this section, "dowry death" shall have the same meaning as in section 80 of the Bharatiya Nyaya Sanhita, 2023.

| Text | What it does | Why it matters |
|---|---|---|
| S. 117 | Lets the court *may presume* abetment of a married woman's suicide by her husband or his relative, where suicide within seven years of marriage and cruelty by that person are both shown, having regard to all other circumstances | A discretionary presumption — the court weighs the whole factual picture before deciding whether to draw it, even once the triggering facts are shown |
| S. 118 | Requires the court to *shall presume* that a person caused a dowry death, where cruelty or harassment for a dowry demand shortly before death is shown | A mandatory presumption — once the triggering facts are shown, the court has no discretion to withhold the presumption, though it remains rebuttable by the accused |

::: proviso "May presume" and "shall presume" are not the same instruction
Section 117's "may presume" leaves the court a genuine discretion, exercised having regard to *all* the other circumstances of the case — proof of the seven-year window and cruelty does not automatically produce the presumption. Section 118's "shall presume" leaves no such discretion once soon-before-death cruelty or harassment for dowry is shown — the court must presume causation, though the accused remains free to rebut it with evidence. Treating these two sections as interchangeable, or treating either "presume" as an irrebuttable "conclusive proof," is a recurring and serious analytical error.
:::

### How this actually runs

<MicroTree
  input="A woman’s death is connected to alleged cruelty within her marriage"
  :gates="[
    { q: 'Is the question whether the death was a suicide allegedly abetted by the husband or his relative (section 117), or a dowry death allegedly caused by a person (section 118)?', no: 'neither section applies; look elsewhere in the Act for the applicable rule' },
    { q: 'For section 117: is it shown that the suicide occurred within seven years of marriage, and that the husband or his relative subjected her to cruelty (as defined in BNS s. 86)? For section 118: is it shown that, soon before death, she was subjected by that person to cruelty or harassment for a dowry demand?', no: 'the relevant presumption does not arise on these facts; ordinary proof requirements apply instead' },
    { q: 'For section 117 specifically: having regard to all the other circumstances of the case, does the court consider it appropriate to draw the discretionary presumption of abetment?', no: 'the court may decline to presume abetment even though the seven-year and cruelty facts are shown — this is exactly what “may presume” preserves' },
    { q: 'For section 118 specifically: has the accused led evidence rebutting the mandatory presumption of causation?', no: 'the presumption of having caused the dowry death stands unless and until such rebutting evidence is led and accepted' }
  ]"
  result="section 117 gives the court a genuine discretion to presume abetment of suicide once the seven-year and cruelty facts are shown, weighed against all other circumstances; section 118 requires the court to presume dowry-death causation once soon-before-death cruelty or harassment for dowry is shown, subject to rebuttal"
  caveat="neither presumption is conclusive proof — section 117’s is discretionary from the outset, and section 118’s, though mandatory once triggered, remains open to rebuttal by the accused"
  resultKind="mixed"
/>

### In plain English

**One of these two presumptions the court can choose to draw; the other it must draw — but "must" still is not "final."** Section 117 asks the court to look at the whole picture — the marriage, the cruelty, the surrounding circumstances — and then decide, as a matter of judgment, whether abetment should be presumed. Section 118 does not leave that judgment call: once cruelty or harassment for dowry shortly before death is shown, the court is required to presume the accused caused the dowry death. But "shall presume" under section 118, like every "shall presume" in this Act, still allows the accused to displace the presumption with evidence — it simply removes the court's initial discretion about whether to draw it in the first place, rather than removing the accused's chance to rebut it afterward.

### What changed from the Indian Evidence Act

::: info Verify before citing
The mapping stated here — Indian Evidence Act, 1872, s. 113A to BSA s. 117, and s. 113B to BSA s. 118 — is offered as the commonly reported correspondence; both old sections are understood to have been lettered insertions rather than originally-numbered sections, consistent with the chapter's pattern of folding such insertions into sequential BSA numbering. The Explanations' cross-references to "cruelty" and "dowry death" have been updated from the Indian Penal Code, 1860 to the Bharatiya Nyaya Sanhita, 2023's sections 86 and 80 respectively. No verified local Indian Evidence Act or Indian Penal Code source text exists in `reference/` to confirm either the old sections' exact wording or the precise old-to-new cross-referenced-section correspondence; treat all of these mappings as flagged hypotheses until verified sources are added.
:::

| Indian Evidence Act (reported) | BSA | What appears to have changed |
|---|---|---|
| S. 113A | S. 117 | Renumbered out of its lettered form into the BSA's sequential numbering, with the "cruelty" cross-reference updated to BNS s. 86 — the discretionary "may presume" structure appears unchanged in substance |
| S. 113B | S. 118 | Renumbered out of its lettered form into the BSA's sequential numbering, with the "dowry death" cross-reference updated to BNS s. 80 — the mandatory "shall presume" structure appears unchanged in substance |

For a practitioner trained on the old Act, both provisions' operative tests should feel unchanged; the essential due-diligence step, as with section 115, is confirming that BNS ss. 86 and 80 are in fact the correct successor definitions before relying on either cross-reference in a live matter.

### Test your instinct

::::instinct Scenario 1 — cruelty shown, but the court still declines to presume
A married woman commits suicide five years into her marriage. It is proved her husband subjected her to cruelty in the year before her death. However, the evidence also shows the couple had reconciled and were living amicably for the six months immediately preceding her death, for reasons apparently unconnected to the marriage. Must the court presume abetment under section 117?
:::ruling
No. Section 117 is a "may presume," exercised having regard to all the other circumstances of the case — proof of the seven-year window and cruelty at some point does not compel the presumption if the surrounding circumstances, such as a genuine subsequent reconciliation and an apparently unconnected cause of death, make the presumption inappropriate on the whole picture. The court retains real discretion here, and a sympathetic reading of "cruelty was shown, so presume abetment" is not how section 117 is meant to work.
:::
::::

::::instinct Scenario 2 — dowry harassment shortly before death, and a mandatory presumption
A woman dies an unnatural death within four years of her marriage. It is proved that, in the fortnight before her death, her husband had harassed her over an unmet dowry demand. The husband offers no evidence in response. Must the court presume he caused her dowry death?
:::ruling
Yes. Once cruelty or harassment for a dowry demand shortly before death is shown, section 118 requires the court to presume the accused caused the dowry death — this is not discretionary, unlike section 117. With no rebutting evidence offered, the presumption stands and operates directly against the husband.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio
*Trimukh Maroti Kirkan v. State of Maharashtra*, (2006) 10 SCC 681 — facts: a wife died an unnatural death inside the matrimonial home, with evidence of prior cruelty and no credible explanation offered by the husband for what happened. **Ratio decidendi:** where a woman's unnatural death occurs inside the matrimonial home and evidence establishes cruelty or harassment connected to a dowry demand shortly before death, the burden shifts to the husband (or other accused within the household) both under the special-knowledge principle and under the statutory presumption of dowry death, and an accused's failure to offer any credible explanation for a death occurring within his own knowledge and control may be weighed heavily against him. **Practitioner takeaway:** "My opponent's silence about what happened inside his own home, in the face of proved cruelty shortly before her death, is not neutral — under section 118 and the special-knowledge principle together, that silence tells against him."

#### Sword and shield
| | As a sword (prosecution) | As a shield (accused) |
|---|---|---|
| S. 117 | Marshal the whole surrounding picture, not just the seven-year window and cruelty, to persuade the court the discretionary presumption should be drawn | Lead evidence of intervening circumstances (reconciliation, unconnected cause) capable of persuading the court not to exercise its discretion |
| S. 118 | Prove the soon-before-death cruelty or harassment for dowry precisely, then rest on the mandatory presumption | Lead affirmative rebutting evidence — silence in the face of a mandatory presumption, especially about events within the accused's own home, is unusually costly |

#### The limitation clock
None of its own for either section. Both operate as trial-stage evidentiary presumptions rather than carrying independent procedural deadlines.

#### Interlocking matrix
| This provision | Interlocks with | Why |
|---|---|---|
| S. 117 | Bharatiya Nyaya Sanhita, 2023, s. 86 | Direct cross-reference — "cruelty" for section 117's purposes is defined entirely in the BNS, not here. |
| S. 118 | Bharatiya Nyaya Sanhita, 2023, s. 80 | Direct cross-reference — "dowry death" for section 118's purposes is defined entirely in the BNS, not here. |
| Ss. 117-118 | Ch. VII part I, s. 109 (`chapter-07a.md`) | Not a debt, but worth flagging: the special-knowledge burden of proof already treated there is frequently argued alongside these presumptions in matrimonial-death cases, since what happened inside the matrimonial home is typically known only to those who were present. |

#### The authorities
No further authority is promoted beyond the winning ratio above.

#### Strategy and drafting
For the prosecution under section 117, build the complete circumstantial picture — not just the seven-year window and an instance of cruelty — since the court's discretion genuinely turns on the whole case, and a thin factual record invites the court to decline the presumption. For the prosecution under section 118, prove the "soon before death" timing precisely, since a temporal gap that is too remote weakens the presumption's foundation even though the standard itself is mandatory once triggered. For the defence under either section, do not rely on silence — lead affirmative evidence, since both presumptions are specifically designed to penalise an unexplained account of events within the accused's own knowledge and control.

## Sections 119 and 120 — the presumption taxonomy, and consent in rape prosecutions

### The dispute this solves

::: oneminute
Section 119 is the Act's general, residual presumption-of-fact provision: the court may presume any fact likely to have happened, having regard to the common course of natural events, human conduct, and public and private business — with nine illustrations (the recently-stolen-goods thief, the uncorroborated accomplice, the withheld-evidence inference, and more) and ten matching counter-illustrations showing when the ordinary maxim should *not* be applied. It is also the natural place to fix, once and for all, the taxonomy running through this entire chapter: "may presume" (discretionary), "shall presume" (mandatory but rebuttable), and "conclusive proof" (irrebuttable except by the statute's own named escape) are three distinct strengths, not three words for the same thing. Section 120 then applies a "shall presume" at the strongest end of that mandatory category to a specific, sensitive fact: where sexual intercourse by the accused is proved in certain rape prosecutions and the woman states in her evidence that she did not consent, the court shall presume that she did not consent.
:::

::: story
Reading sections 104 through 120 as a single ladder makes the taxonomy concrete: section 106's ordinary default (whoever wants a fact believed must prove it) sits at the bottom; section 119's "may presume" sits above it, letting the court use common sense but never compelling it to; section 108's, section 115's, and section 118's "shall presume" sit higher still, requiring the presumption once the triggering facts are shown but always leaving rebuttal open; and section 116's "conclusive proof" sits at the very top, closing the door to everything except the one named escape. Section 120 is a "shall presume" pitched deliberately high on that ladder, in recognition of how rarely a woman's own sworn evidence of non-consent in these prosecutions has historically been given the weight it deserves.
:::

### The Act, decompiled

> **119.** (1) The Court [[?may presume]] the existence of any fact which it thinks likely to have happened, regard being had to the common course of natural events, human conduct and public and private business, in their relation to the facts of the particular case.
>
> Illustrations.
>
> The Court may presume that—
>
> (a) a man who is in possession of stolen goods soon, after the theft is either the thief or has received the goods knowing them to be stolen, unless he can account for his possession;
>
> (b) an accomplice is unworthy of credit, unless he is corroborated in material particulars;
>
> (c) a bill of exchange, accepted or endorsed, was accepted or endorsed for good consideration;
>
> (d) a thing or state of things which has been shown to be in existence within a period shorter than that within which such things or state of things usually cease to exist, is still in existence;
>
> (e) judicial and official acts have been regularly performed;
>
> (f) the common course of business has been followed in particular cases;
>
> (g) evidence which could be and is not produced would, if produced, be unfavourable to the person who withholds it;
>
> (h) if a man refuses to answer a question which he is not compelled to answer by law, the answer, if given, would be unfavourable to him;
>
> (i) when a document creating an obligation is in the hands of the obligor, the obligation has been discharged.
>
> (2) The Court shall also have regard to such facts as the following, in considering whether such maxims do or do not apply to the particular case before it — including, among the illustrations given, that a shop-keeper continually receiving rupees in the course of business may reasonably fail to account for one marked rupee specifically; that a person of good character who fully and precisely explains a shared act of negligence may not deserve illustration (b)'s adverse inference; that several captured persons giving accounts implicating another, which corroborate each other in a manner rendering concert improbable, may be treated differently; that a young and inexperienced acceptor completely under an experienced drawer's influence affects illustration (c); that proved intervening floods affect illustration (d)'s continuity inference; that exceptional circumstances affect illustration (e); that interrupted postal service affects illustration (f); that a document's production would injure family feelings though the underlying contract is of small importance affects illustration (g); that a refusal to answer touching an unconnected, potentially damaging matter affects illustration (h); and that circumstances suggesting a bond may have been stolen affect illustration (i).
>
> **120.** In a prosecution for rape under sub-section (2) of section 64 of the Bharatiya Nyaya Sanhita, 2023, where sexual intercourse by the accused is proved and the question is whether it was without the consent of the woman alleged to have been raped and such woman states in her evidence before the Court that she did not consent, the Court [[!shall presume]] that she did not consent.
>
> Explanation.—In this section, "sexual intercourse" shall mean any of the acts mentioned in section 63 of the Bharatiya Nyaya Sanhita, 2023.

| Text | What it does | Why it matters |
|---|---|---|
| S. 119(1) | Lets the court presume any fact likely to have happened given the common course of natural events, human conduct, and business, illustrated by nine named maxims | The Act's general, residual, wholly discretionary presumption-of-fact power — the broadest and weakest of the three presumption strengths |
| S. 119(2) | Requires the court to weigh case-specific circumstances against each maxim before applying it, illustrated by ten matching counter-considerations | Confirms that even a "may presume" maxim is never applied mechanically — the court must test it against the actual facts before it |
| S. 120 | Requires the court to presume absence of consent, in specified rape prosecutions, once intercourse is proved and the woman's own evidence states she did not consent | A "shall presume" at the strongest practical end of that category, for a fact pattern where corroboration of non-consent has historically, and wrongly, been demanded beyond what the law requires |

::: proviso Three strengths, three different consequences — do not collapse them
"May presume" (s. 119, and s. 117 in Part I above) leaves the court free to decline the presumption even on identical facts in a different case. "Shall presume" (ss. 108, 115, 118, and 120) requires the presumption once the triggering facts are shown, but leaves the opposing party free to rebut it with evidence. "Conclusive proof" (s. 116) forecloses rebuttal entirely except through the one escape the statute itself names. A submission that treats any two of these as interchangeable will not withstand a focused challenge.
:::

### How this actually runs

<MicroTree
  input="A court is asked to draw a presumption somewhere in this chapter, or a rape prosecution turns on the question of consent"
  :gates="[
    { q: 'Is the presumption in question one where the Act uses “may presume” (section 119, or section 117 above)?', no: 'move to the next gate' },
    { q: 'If “may presume”: has the court, having weighed the whole circumstances (not just the bare maxim), decided the presumption should be drawn?', no: 'the court may decline to presume the fact even though the maxim’s bare pattern is shown — this is a genuine discretion, not a formality' },
    { q: 'Is the presumption instead one where the Act uses “shall presume” (sections 108, 115, 118, or 120)?', no: 'if neither “may” nor “shall presume” applies, check whether “conclusive proof” (section 116) governs instead' },
    { q: 'For section 120 specifically: is this a prosecution under BNS s. 64(2), is sexual intercourse by the accused proved, and does the woman state in her evidence that she did not consent?', no: 'section 120’s specific mandatory presumption of non-consent does not arise; general consent-related evidence rules apply instead' }
  ]"
  result="a “may presume” maxim is applied only after the court actually weighs the case’s circumstances against it; a “shall presume” provision requires the presumption once its triggering facts are shown, subject to rebuttal; section 120 in particular requires a presumption of non-consent once intercourse is proved and the woman’s own evidence states she did not consent"
  caveat="none of the presumptions discussed here — except section 116’s conclusive proof, treated separately in this chapter — forecloses the opposing party’s chance to rebut with evidence; “shall presume” removes only the court’s initial discretion about whether to presume, not the losing party’s chance to displace the presumption afterward"
  resultKind="mixed"
/>

### In plain English

**"May," "shall," and "conclusive" are three different instructions, and section 119 is where the Act shows its full range of common-sense maxims to make the weakest of the three concrete.** A shopkeeper caught with a marked stolen rupee soon after a theft, a witness refusing to answer a question he need not answer, a document creating a debt sitting in the debtor's own hands — all of these are everyday inferences the court *may* draw, but the Act insists, through its ten matching counter-illustrations, that the court test each maxim against what is actually shown in the specific case rather than applying it mechanically. A shopkeeper who handles marked rupees constantly in the ordinary course of trade should not automatically be presumed a thief merely for holding one.

Section 120 sits at the far end of the spectrum from that discretionary flexibility. Once intercourse is proved in the specified class of rape prosecution, and the woman's own sworn evidence states she did not consent, the court does not get to decide case by case whether that evidence deserves the benefit of a presumption — it must presume non-consent. This does not make the presumption irrebuttable; the accused may still lead evidence to displace it. What it removes is the historical practice of demanding independent corroboration of non-consent before giving the complainant's own testimony any real weight at all.

### What changed from the Indian Evidence Act

::: info Verify before citing
The mapping stated here — Indian Evidence Act, 1872, s. 114 to BSA s. 119, and s. 114A to BSA s. 120 — is offered as the commonly reported correspondence, with s. 114A understood to have been a lettered insertion folded into the BSA's sequential numbering, consistent with the pattern already seen at ss. 115, 117, and 118. The old s. 114A's cross-reference to the Indian Penal Code, 1860's rape provision has been updated to the Bharatiya Nyaya Sanhita, 2023's s. 64(2), and the "sexual intercourse" Explanation now cross-refers to BNS s. 63. No verified local Indian Evidence Act or Indian Penal Code source text exists in `reference/` to confirm the old sections' exact wording, illustrations, or the precise old-to-new offence-section correspondence; treat all of these mappings as flagged hypotheses until verified sources are added.
:::

| Indian Evidence Act (reported) | BSA | What appears to have changed |
|---|---|---|
| S. 114 | S. 119 | Renumbered, on the reported mapping — the general presumption-of-fact power, its nine illustrations, and its ten counter-illustrations appear unchanged in substance |
| S. 114A | S. 120 | Renumbered out of its lettered form into the BSA's sequential numbering, with the rape-provision cross-reference updated to BNS s. 64(2) and the "sexual intercourse" definition updated to BNS s. 63 — the mandatory presumption of non-consent once intercourse is proved and the complainant so testifies appears unchanged in substance |

For a practitioner trained on the old Act, section 119's maxims and counter-illustrations should be entirely familiar territory, and section 120's operative test is unchanged; the due-diligence step, as elsewhere in this chapter, is confirming BNS ss. 64(2) and 63 are in fact the correct successor provisions before relying on the cross-references in a live matter.

### Test your instinct

::::instinct Scenario 1 — the shopkeeper who cannot escape illustration (a)
Stolen jewellery is found in a pawnbroker's shop three days after a theft. The pawnbroker cannot specifically recall from whom he acquired that particular piece, but produces detailed, credible ledgers showing he purchases small quantities of jewellery from walk-in sellers every single day as the ordinary nature of his trade. Should the court presume him a thief or receiver under illustration (a) to section 119?
:::ruling
Not automatically — this is precisely what section 119(2)'s counter-illustration to illustration (a) is built to catch. A shopkeeper continually receiving goods of that kind in the ordinary course of business, unable to specifically account for one particular item among many, is treated differently from someone found with a single, unexplained, out-of-place item. The court must weigh this circumstance before applying the maxim; it is not bound to presume guilt merely because the bare pattern (stolen goods, recent possession) is technically present.
:::
::::

::::instinct Scenario 2 — the complainant's own testimony under section 120
In a prosecution under BNS s. 64(2), the accused's sexual intercourse with the complainant is proved. The complainant testifies clearly, under oath, that she did not consent. The defence offers no evidence in rebuttal beyond suggesting, without proof, that her account is generally implausible. Must the court presume absence of consent?
:::ruling
Yes. Once intercourse is proved and the complainant's own evidence states she did not consent, section 120 requires the court to presume non-consent — mere suggestion or generalised doubt, unsupported by actual rebutting evidence, does not prevent the presumption from arising or displace it once it has. The defence's failure to offer any real evidence in response leaves the presumption standing.
:::
::::

### Practitioner HUD — operational realities

#### The winning ratio
*State of Punjab v. Gurmit Singh*, (1996) 2 SCC 384 — facts: a prosecution for rape of a minor where the trial court had acquitted the accused, discounting the prosecutrix's testimony for want of independent corroboration and citing minor inconsistencies. **Ratio decidendi:** the testimony of a rape victim is entitled to great weight, and does not require independent corroboration as a matter of law before it can found a conviction; courts must not approach a victim's testimony with suspicion merely because she is a victim of sexual assault, and minor discrepancies that do not go to the root of the prosecution's case should not be used to discredit an otherwise credible account. **Practitioner takeaway:** "My client's testimony that she did not consent does not need independent corroboration to be acted upon — the law starts from crediting it, and under section 120 the court must presume non-consent once intercourse is proved and she has so testified."

#### Sword and shield
| | As a sword (offering a presumption) | As a shield (resisting one) |
|---|---|---|
| S. 119 | Identify precisely which of the nine illustrated maxims fits, and lead the surrounding facts supporting it, rather than invoking the maxim in the abstract | Lead the matching counter-illustration's kind of evidence — the ordinary course of business, an intervening flood, an interrupted postal service — to persuade the court not to apply the maxim on these facts |
| S. 120 | Once intercourse is proved, rest on the complainant's own sworn testimony of non-consent and press the mandatory character of the presumption | Lead genuine, specific rebutting evidence — not generalised suggestion — since the presumption is not conclusive but is not weakened by unsupported doubt either |

#### The limitation clock
None of its own for either section. Both operate as trial-stage evidentiary rules rather than carrying independent procedural deadlines.

#### Interlocking matrix
| This provision | Interlocks with | Why |
|---|---|---|
| S. 120 | Bharatiya Nyaya Sanhita, 2023, ss. 63-64 | Direct cross-reference — the offence, its aggravated form under sub-section (2), and the definition of "sexual intercourse" for section 120's purposes are all defined entirely in the BNS. |
| Ss. 119-120 | Ch. II part V, ss. 39-45 (`chapter-02e.md`) | Not a debt, but worth flagging: medical and forensic expert evidence bearing on intercourse or on the surrounding circumstances relevant to a section 119 maxim is admitted under the expert-opinion rules already treated there, before either presumption becomes relevant. |

#### The authorities
No further authority is promoted beyond the winning ratio above.

#### Strategy and drafting
When invoking a section 119 maxim, name it explicitly and address the matching counter-illustration head-on in submissions — courts are unlikely to apply a maxim mechanically once the Act's own text flags the very consideration that might defeat it. When prosecuting under section 120, lead the complainant's testimony of non-consent clearly and do not treat corroboration as legally required, while still building the surrounding evidentiary picture to withstand a genuine rebuttal case; when defending, any rebuttal must be evidence-based and specific, since generalised suggestion alone will not disturb the presumption once it has arisen.

## Chapter VII part II consolidation — reading the presumption ladder as one whole

1. **Identify which of the three strengths is actually in play: "may presume" (s. 119, and s. 117 above), "shall presume" (ss. 108, 115, 118, 120), or "conclusive proof" (s. 116).** Treating any two of these as the same is the single most common error across this part of the chapter.
2. **For a "may presume" provision, confirm the court has actually weighed the case's specific circumstances**, not merely matched the bare pattern of one of section 119's nine illustrations — the ten counter-illustrations exist precisely to force that weighing.
3. **For a "shall presume" provision, confirm the triggering facts are shown precisely**, then remember the presumption remains open to rebuttal by the opposing party — mandatory does not mean irrebuttable.
4. **For section 116's conclusive proof, remember only the one named escape (non-access) can defeat it** — general doubt or even contrary biological evidence, without more, cannot.

**Chapter VII, "Of the Burden of Proof" (ss. 104-120), is now complete across `chapter-07a.md` (Part I, ss. 104-114) and this file (Part II, ss. 115-120).** This closes Phase 6 of the roadmap. Chapter VIII, Estoppel, is next.
