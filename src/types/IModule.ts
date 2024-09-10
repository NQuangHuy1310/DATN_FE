export interface IModule {
    title: string
    lessons: {
        title: string
        time: number
        type: 'video' | 'docs' | 'quiz'
    }[]
}
