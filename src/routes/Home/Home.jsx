import { useState, useEffect } from 'react'
import { columnsMap } from '@constants'
import { getDataUri } from '@lib/utils'
import MobilePhone from '@components/MobilePhone'

const Home = () => {
    
    const [files, setFiles] = useState([])
    const [fileUrls, setFileUrls] = useState([])
    
    const handleFilesChanged = e => {
        
        const res = []
        
        for (let i = 0; i < e.target.files.length; i++) {
            res.push(e.target.files[i])
        }
        
        setFiles(res)
        
    }
    
    useEffect(() => {
        
        Promise.all(files.map(getDataUri))
            .then(setFileUrls)
            .catch(console.error)
        
    }, [files])
    
    return (
        
        <div className="flex items-center justify-center h-screen -mt-20 Home">
            
            <div className="flex flex-col justify-center gap-4">
                
                <div id="form" className="flex items-center justify-center gap-4 mb-4">
                    <input
                        id="file"
                        className="rounded cursor-pointer file-input hover:bg-base-200"
                        type="file"
                        multiple
                        onChange={handleFilesChanged} />
                </div>
                
                <div className={`grid ${columnsMap[fileUrls.length]}`}>
                    {fileUrls.map(it => (
                        <MobilePhone key={it.id} imageUrl={it.url} />
                    ))}
                </div>
            
            </div>
        
        </div>
        
    )
    
}

export default Home
