export type ClubMember = {
  name: string
  major: string
  graduationYear: number
}

export type ClubMemberWithId = ClubMember & {
  id: string
}
