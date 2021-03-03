<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'content',
        'image1',
        'image2'
    ];

    function getNameImage1(){
        return 'https://tungnguyenc3.s3.amazonaws.com/' .($this->image1);
    }
    function getNameImage2(){
        return 'https://tungnguyenc3.s3.amazonaws.com/' .($this->image2);
    }
}
