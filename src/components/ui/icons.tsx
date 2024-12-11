import Image from 'next/image';
import Instagram from '@/app/icons/instagram.png'
import Facebook from '@/app/icons/social-media.png'
import LinkedIn from '@/app/icons/linkedin.png'
import Discord from '@/app/icons/logo.png'
import YouTube from '@/app/icons/youtube.png'
import Twitch from '@/app/icons/twitch.png'
import TikTok from '@/app/icons/tik-tok.png'


export function Icons() {
    return (
        <div className="flex items-center justify-center gap-4">
            <Image 
                className='w-6'
                src={Instagram}
                alt="Instagram icon freepik"
            />
            <Image 
                className='w-6'
                src={Facebook}
                alt="Facebook icon freepik"
            />
            <Image
                className='w-6'
                src={LinkedIn}
                alt="LinkedIn icon freepik"
            />
            <Image 
                className='w-6'
                src={Discord}
                alt="Discord icon freepik"
            />
            <Image 
                className='w-6'
                src={YouTube}
                alt="YouTube icon freepik"
            />
            <Image 
                className='w-6'
                src={Twitch}
                alt="Twitch icon freepik"
            />
            <Image 
                className='w-6'
                src={TikTok}
                alt="TikTok icon freepik"
            />
        </div>
    );
}