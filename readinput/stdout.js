const writer =  Deno.stdout.writable.getWriter();
writer.write(new Uint8Array([65,66,67]));