export type TeamMember = {
  id: string
  name: string
  role: string
  image?: string
  bio?: string
  socials?: {
    linkedin?: string
    github?: string
    twitter?: string
    website?: string
  }
}

export const team: TeamMember[] = [
  {
    id: '1',
    name: 'Praveen pattanchery',
    role: 'Behavior psychologist',
    image:'./team/praveen.jpeg',
    bio:'' ,
    // socials: {
    //   linkedin: 'https://www.linkedin.com/',
    //   twitter: 'https://x.com/',
    // },
  },
  {
    id: '2',
    name: 'Padmasree anumod',
    role: 'Counseling psychology and behaviour therapist',
    image:
      './team/padmasree.jpeg',
    bio: '',
    // socials: {
    //   github: 'https://github.com/',
    //   linkedin: 'https://www.linkedin.com/',
    // },
  },
]