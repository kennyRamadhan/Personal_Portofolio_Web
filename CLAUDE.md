# Repo notes for Claude

## Commit messages

- **Do NOT add `Co-Authored-By: Claude ... <noreply@anthropic.com>` trailers** in this repo.
- Reason: this project deploys on Vercel **Hobby**, which blocks any commit whose author OR co-author is not the project owner. The `noreply@anthropic.com` co-author trailer caused a real deployment block (commit `51656c6`).
- Author and committer should always be Kenny Ramadhan <kenny.ramadhan@noovoleum.com>. No co-author trailers of any kind unless the user explicitly asks.
