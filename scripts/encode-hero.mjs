import ffmpeg from 'fluent-ffmpeg';
import ffmpegInstaller from '@ffmpeg-installer/ffmpeg';
import { existsSync, mkdirSync } from 'fs';
import path from 'path';

ffmpeg.setFfmpegPath(ffmpegInstaller.path);

const inputPath = path.resolve('../11904049_3840_2160_50fps.mp4');
const outputPath = path.resolve('./public/videos/hero-optimized.mp4');
const outputDir = path.dirname(outputPath);

if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true });
}

console.log('🎬 Starting Hero video optimization (Hardware MP4)...');

// 1. Extract Poster just in case
console.log('[1/2] Extracting poster frame...');
ffmpeg(inputPath)
  .screenshots({
    timestamps: [0.0],
    filename: 'hero-poster.jpg',
    folder: outputDir,
    size: '1920x1080'
  })
  .on('end', () => {
    startEncode();
  })
  .on('error', (err) => {
    startEncode(); // continue even if poster fails
  });

function startEncode() {
  console.log('\n[2/2] Encoding MP4 (4K 50fps - Optimized for Web)...');
  ffmpeg(inputPath)
    .outputOptions([
      '-codec:v libx264',
      '-preset slow',         // Best compression efficiency
      '-crf 22',              // Visually lossless
      '-maxrate 20M',         // Cap bitrate to prevent browser decode stuttering
      '-bufsize 40M',         
      '-pix_fmt yuv420p',     // Strict Web compatibility
      '-movflags +faststart', // Puts metadata at start for instant zero-delay playback
      '-an'                   // Strip audio completely
    ])
    .output(outputPath)
    .on('progress', function(progress) {
      if (progress.percent) {
        process.stdout.write(`\r⏳ Processing: ${progress.percent.toFixed(2)}% done`);
      } else if (progress.frames) {
        process.stdout.write(`\r⏳ Processing: ${progress.frames} frames processed`);
      }
    })
    .on('end', function() {
      console.log('\n🎉 Transcoding succeeded! Check public/videos/hero-optimized.mp4');
    })
    .on('error', function(err) {
      console.log('\n❌ An error occurred during MP4 encoding: ' + err.message);
    })
    .run();
}
