$(document).ready(function() {
    $('.typing').each(function() {
        const $this = $(this);
        const text = $this.text().trim();
        $this.text('');
        $this.css('visibility', 'visible');
        
        let i = 0;
        function type() {
            if (i < text.length) {
                $this.append(text.charAt(i));
                i++;
                setTimeout(type, 100);
            } else {
                setTimeout(() => {
                    $this.css('border-right', 'none');
                }, 2000);
            }
        }
        type();
    });
});


