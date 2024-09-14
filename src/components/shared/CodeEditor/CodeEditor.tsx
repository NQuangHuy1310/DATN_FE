import React, { useRef, useState } from 'react'
import axios from 'axios'

import { Editor } from '@monaco-editor/react'
import * as monaco from 'monaco-editor'

import { Button } from '~/components/ui/button/Button'
import { LANGUAGE_VERSIONS } from '~/constants/codeLanguage'

type EditorType = monaco.editor.IStandaloneCodeEditor | null

const CodeEditor: React.FC = () => {
    const [tab, setTab] = useState('1')
    const editorRef = useRef<EditorType>(null)
    const [output, setOutput] = useState<string[] | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    const onMount = (editor: monaco.editor.IStandaloneCodeEditor) => {
        editorRef.current = editor
        editor.focus()
    }

    const runCode = async () => {
        const sourceCode = editorRef.current?.getValue()
        if (!sourceCode) return
        try {
            setIsLoading(true)
            const { data: result } = await axios.post('https://emkc.org/api/v2/piston/execute', {
                language: 'javascript',
                version: LANGUAGE_VERSIONS['javascript'],
                files: [
                    {
                        content: sourceCode
                    }
                ]
            })
            setOutput(result.run.output.split('\n'))
            setIsError(!!result.stderr)
        } catch (error: any) {
            console.log(error)
            setIsError(true)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="grid grid-cols-2">
            <div>
                <div>
                    <div className="grid grid-cols-2">
                        <div
                            className={`flex items-center gap-2 justify-center cursor-pointer py-3 ${
                                tab === '1'
                                    ? 'relative bg-feedback-informative/10 after:absolute after:w-full text-interactive-primary-default after:bg-interactive-primary-default after:h-[3px] after:bottom-0 font-semibold text-TLG'
                                    : 'relative after:absolute after:w-full after:bg-gray-100 after:h-[3px] after:bottom-0 font-semibold text-TLG'
                            }`}
                            onClick={() => setTab('1')}
                        >
                            <span>Nội Dung</span>
                        </div>
                        <div
                            className={`flex items-center gap-2 justify-center cursor-pointer py-3 ${
                                tab === '2'
                                    ? 'relative bg-feedback-informative/10 after:absolute after:w-full text-interactive-primary-default after:bg-interactive-primary-default after:h-[3px] after:bottom-0 font-semibold text-TLG'
                                    : 'relative after:absolute after:w-full after:bg-gray-100 after:h-[3px] after:bottom-0 font-semibold text-TLG'
                            }`}
                            onClick={() => setTab('2')}
                        >
                            <span>Trình Duyệt</span>
                        </div>
                    </div>
                </div>
                <div className="">
                    {tab === '1' && (
                        <div className="h-[77vh] overflow-hidden overflow-y-auto px-4">
                            <h2 className="text-DMD font-bold mt-4">Thực hành sử dụng phương thức reduce #2</h2>
                            <span className="block mt-1">Cập nhật tháng 6 năm 2022</span>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas aut repudiandae
                                aperiam laudantium assumenda. Odio necessitatibus veniam minus iusto officiis? Itaque at
                                sunt consequuntur ipsam saepe sapiente quod quaerat in? Perspiciatis, in. Accusamus
                                veniam a iure, reprehenderit veritatis beatae, quasi, temporibus dolor non est aperiam?
                                Sed ab rerum provident inventore dolores, repudiandae atque, delectus, neque nihil
                                blanditiis quas deserunt et? Minima, accusamus hic, eligendi velit consequuntur a nobis,
                                assumenda inventore unde nulla aperiam odio voluptatem consectetur quam non temporibus
                                ad laudantium pariatur esse corrupti quod eum! Ducimus ex quod vitae! Libero maxime
                                doloremque unde at rerum nam dignissimos est praesentium, accusantium officiis iusto
                                eum, id veniam dolorem quia! Consectetur iste laudantium sed in accusantium iusto,
                                praesentium voluptatibus voluptas vero cupiditate! Excepturi, eos distinctio.
                                Praesentium dolores nam voluptatibus ducimus vero? Fugit cum impedit voluptatum aperiam!
                                Voluptatem deleniti sapiente quo eaque. Porro architecto eum et illo assumenda sed omnis
                                rem necessitatibus eius. Necessitatibus quam mollitia hic optio laudantium eos maiores
                                totam nihil laboriosam. Distinctio ab quam assumenda, mollitia ea veritatis quod quidem.
                                Consequatur unde quibusdam vel itaque dolores laboriosam necessitatibus, veniam quia?
                                Quidem autem perferendis recusandae officia ut veniam modi inventore ab, illum ducimus
                                dolorum incidunt quod ea quibusdam, expedita eligendi. Quasi soluta necessitatibus at
                                odio obcaecati, laboriosam minima a doloremque inventore! Nulla harum minima cum
                                molestias eos. In placeat a iure eum optio quam iste officiis nulla ad laudantium sint
                                reiciendis quibusdam, ut quod doloremque quos alias, est exercitationem distinctio
                                vitae. Voluptatem porro, aperiam, illo, cupiditate a cum corrupti fuga deserunt impedit
                                magnam consequatur et perferendis illum ut quo. Animi libero nemo autem, odio maiores
                                earum sint quidem ex. Tempora, nulla? Fugit porro non magni dolor in culpa. Earum
                                voluptatem assumenda eos quas animi eaque culpa. Nostrum libero quam fugiat amet dolor
                                velit debitis, voluptate ducimus ipsum commodi eligendi iure soluta.
                            </div>
                        </div>
                    )}
                    {tab === '2' && (
                        <div>
                            <div>
                                {isError && <p>Error occurred during execution.</p>}
                                {output
                                    ? output.map((line, i) => <div key={i}>{line}</div>)
                                    : 'Nếu có file index.html thì nội dung của nó sẽ được hiển thị tại đây.'}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="border-l">
                <Editor
                    options={{
                        minimap: {
                            enabled: false
                        }
                    }}
                    height="56vh"
                    theme="vs-dark"
                    language="javascript"
                    onMount={onMount}
                    value={`var sports = [\n   {\n      name: 'Bơi lội',\n      gold: 11\n   }\n ]\n let getTotalGold = (sports) => {\n   return sports.reduce((a, b) => {\n      return a + b.gold;\n },0)\n } \n\n\n // Expected results: \nconsole.log(getTotalGold(sports)) // Output: 23`}
                />
                <div className="h-[27vh]">
                    <div className="flex border justify-between items-center py-1 px-5">
                        <div>
                            <p>Bài kiểm tra</p>
                        </div>
                        <div>
                            <Button className="h-8" onClick={runCode} disabled={isLoading}>
                                Kiểm tra
                            </Button>
                        </div>
                    </div>
                    <div className="px-5">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. A id ut repudiandae quaerat voluptate
                        tenetur veritatis beatae, accusamus illo tempore nam, molestiae facilis? Magnam hic quasi
                        reprehenderit. Quos, odit sit.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CodeEditor
