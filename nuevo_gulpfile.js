'use strict';
const path = require('path');
const browsersync = require('browser-sync');
const gulp = require('gulp');
const plugins = require('gulpLoadPlugins');
const minimist = require('minimist');
const glob = require('glob');
const KarmaServer = require('karma').Server;
const pjson = require('./package.json');
const gulpif = require('gulp-if');
const pngquant = require('imagemin-pngquant');

const notificacionDefault = function (err) {
  return {
    subtitle: err.plugin,
    messsage: err.messsage,
    sound: 'Funk',
    onLast: true,
  };
};

let config = Object.assign({},pjson.config, notificacionDefault);
let args = minimist(process.argv.slice(2));
let taskTarget = args.production ? dirs.destination : dirs.temporary;
let dirs = config.directories;

function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: './tmp/'
    },
    port: 3000
  });
  done();
}

function browserSyncReload(done) {
  browsersync.reload();
  done();
}

function imagemin() {
  let dest = path.join(taskTarget, dirs.images.replace(/^_/,''));
  let src = path.join(dirs.source, dirs.images, '**/*.{jpg,jpeg,gif,svg,png}');
  return gulp
  .src(src)
  .pipe(plugins.changed(dest))
  .pipe(gulpif(args.production, plugins.imagemin([plugins.imagemin.jpegtran({progressive: true}), plugins.imagemin.svgo({plugins: [{removeViewBox: false}]})], {use: [pngquant({speed: 10})]})))
  .pipe(gulp.dest(dest))
}

function copy() {
  let dest = path.join(taskTarget);
  return gulp
  .src([path.join(dirs.source, '**/*'),'!'+path.join(dirs.source, '{**/\_*,**/\_*/**}'),'!'+path.join(dirs.source, '**/*.jade')])
  .pipe(plugins.changed(dest)))
  .pipe(gulp.dest(dest))
}

function jade() {
  let dest = path.join(taskTarget)
  let dataPath = path.join(dirs.source, dirs.data);
  let siteData = {};
  if (fs.existSync(dataPath)) {
    siteData = foldero(dataPath, {
      recurse: true,
      whitelist: '(.*/)*.+\.(json|ya?ml)$',
      loader: function loadAsString(file) {
        let json = {};
        try {
          if (path.extname(file).match(/^.ya?ml$/)) {
            json = yaml.safeLoad(fs.readFileSync(file, 'utf8'));
          } else {
            json = JSON.parse(fs.readFileSync(file, 'utf8'));
          }
        }
        catch(e) {
          console.log('Error en el procesado de la información en el archivo: ' + file);
          console.log('Detalles-------');
          console.log(e);
        }
        return json;
      }
    });
  }
  if (args.debug) {
    console.log('Debug inyectada a los formatos');
    console.log(siteData);
  }
  return gulp.src([path.join(dirs.source, '**/*.jade'), '!'+path.join(dirs.source, '{**/\_*,**/\_*/**}')])
  .pipe(plugins.changed(dest))
  .pipe(plugins.plumber())
  .pipe(plugins.jade({
    jade: jade,
    pretty: true,
    locals: {
      config: config,
      debug: true,
      site: {
        data: siteData
      }
    }
  }))
  .pipe(plugins.htmlmin({
    collapseBooleanAttributes: true,
    conservativeCollapse: true,
    removeCommentsFromCDATA: true,
    removeEmptyAttributes: true,
    removveRedundantAttributes: true
  }))
  .pipe(gulp.dest(dest))
  .on('end', browserSync.reload)
}

function sass() {
  gulp.src(path.join(dirs.source, dirs.styles, entries.css))
    .pipe(plugins.plumber())
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass({
      outputStyle: 'expanded', 
      
    }))
}
exports.default = defaultTask;