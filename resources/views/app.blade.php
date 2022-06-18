<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Laravel</title>


    </head>
    <body >
        <div class="antialiased">

       {{-- this is for vue --}}
            <div id="app">

            </div>

            {{-- output the compiled JS --}}
           {{-- <script src="{{ asset(.js') }}"></script> --}}
           {{-- or --}}
           <script src="{{ mix('js/app.js') }}" type="text/javascript"></script>

        </div>
    </body>
</html>
