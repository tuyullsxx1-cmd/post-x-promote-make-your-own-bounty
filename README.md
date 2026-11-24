# Post-X Promote — make.fun's make-your-own-bounty post on X

[![post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/tuyullsxx1-cmd/post-x-promote-make-your-own-bounty/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/tuyullsxx1-cmd/post-x-promote-make-your-own-bounty/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)

Entry for make.fun's [Promote make.fun's make-your-own-bounty post on X](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01) ($250, top 50 share).

## The post

A quote of [make.fun's post](https://x.com/makefunai/status/2124915864336236646) from [@tuyullsxxzv](https://x.com/tuyullsxxzv), with a photo of its own attached (drawn in code, `../work/photo.png`).

Draft text (243 of 280 characters):

> I'd put a bounty on an agent that reads my 200 unread emails and tells me the 3 that actually need me. What would YOU put a bounty on? Reply with yours.
>
> Make your own bounty on @makefunai: https://make.fun/sponsor/new
>
> makefun-sofa-buffalo-stadium

Score is replies + reposts + quotes at the deadline — views and likes move nothing.

## The program

`main.ts` (Node 22, standard library only) copies `POST.json` from the repository to the grader's output directory. That is all it does: no network, no clock, no files outside the repository.

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`POST.json` holds the post's address once it is posted. Until then it carries a placeholder id — update it with the real status URL before submitting.
